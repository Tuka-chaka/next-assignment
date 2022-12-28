import styles from '../../styles/index.module.scss'
import connect2db from '../../lib/mongodb';
import { useEffect, useState } from 'react';
import TestHeader from '../../components/testHeader/Testheader'
import Sidebar from '../../components/sidebar/Sidebar';
import Timer from '../../components/timer/Timer';
import Question from '../../components/question/question';
import { useRouter } from 'next/router';

export default function Home(props) {
const router = useRouter()
const id = router.query.questionId
  const test = props.tests[router.query.testId - 1]
  const [activeQuestion, setActiveQuestion] = useState(test.questions[id-1])
  const [results, setResults] = useState([])
  console.log(results.map(res => res.id))


  const submitToMongo = (value) => {
    console.log(value)
    new Promise((resolve) => {
      resolve(setResults([...results, {id: id, answer: value, correctAnswer: activeQuestion.answers.find(answer => answer.valid).text}]))
    }).then(sendResults(value))
  }

  const testSubmit = (value) => {
    setResults(...results, {id: id, answer: value, correctAnswer: activeQuestion.answers.find(answer => answer.valid).text})
    console.log(results)
    console.log({id: id, answer: value, correctAnswer: activeQuestion.answers.find(answer => answer.valid).text})
  }


  const sendResults = async (value) => {
    let res = await fetch("http://localhost:3000/api/sendResult", {
      method: "POST",
      body: JSON.stringify({
        title: test.title,
        result: [...results, {id: id, answer: value, correctAnswer: activeQuestion.answers.find(answer => answer.valid).text}],
      })
    })
    res.json().then(submitQuestion())
    }


  const changeActiveQuestion = (id) => {
    
    router.push(`/${router.query.testId}/` + (id + 1))
    setActiveQuestion(test.questions[id])
  }
    const submitQuestion = () => {
      id < test.questions.length?
      changeActiveQuestion(test.questions.findIndex((element) => element.text == activeQuestion.text) + 1)
      :
      router.push(`/${router.query.testId}/` + ('results'))
    }
    

  return (
    !id ? <></> :
    !(id === 'results') ? 
    <div className={styles.container}>
      <Sidebar questions={test.questions} action={changeActiveQuestion}/>
      <div className={styles.container__inner}>
      <TestHeader testTheme={test.title} questionNumber={test.questions.findIndex((element) => element.text == activeQuestion.text) + 1 + '/' + test.questions.length}/>
      <Timer question={activeQuestion}/>
      <Question question={activeQuestion} action={submitQuestion} onSubmit={(value) => submitToMongo(value)} isLast={!(id < test.questions.length)}/>
      </div>
    </div>
    :
    <div className={styles.container}>
      <Sidebar questions={[]} action={changeActiveQuestion}/>
      <div className={styles.container__inner}>
      <TestHeader testTheme={test.title + ": результаты"} questionNumber={test.questions.length + '/' + test.questions.length}/>
      {test.questions.map((q, id) =>
         <div className={styles.result} key={id}>
            {`${id+1}. ${q.text} - ${results.map(res => res.id).includes(String(id+1)) ? (results.find(res => res.id == id+1).answer == results.find(res => res.id == id+1).correctAnswer ? 'верно' : 'неверно'): 'неверно'}`}
            <div className={styles.details}>
              {results.map(res => res.id).includes(String(id+1)) ? 
              `Ваш ответ: ${results.find(res => res.id == id+1).answer}. Правильный ответ: ${results.find(res => res.id == id+1).correctAnswer}` :
              `Ваш ответ: нет ответа. Правильный ответ: ${q.answers.find(answer => answer.valid).text}`}
              
            </div>
         </div>)}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => ({
  props: {
    tests: JSON.parse(
      JSON.stringify(
        await (await connect2db()).db.collection("tests").find({}).toArray()
      )
    )
  },
});
