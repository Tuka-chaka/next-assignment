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


  const changeActiveQuestion = (id) => {
    
    router.push(`/${router.query.testId}/` + (id + 1))
    setActiveQuestion(test.questions[id])
  }
    const submitQuestion = () => {
      changeActiveQuestion(test.questions.findIndex((element) => element.text == activeQuestion.text) + 1)
    }
    

  return (
    !id ? <></> :
    <div className={styles.container}>
      <Sidebar questions={test.questions} action={changeActiveQuestion}/>
      <div className={styles.container__inner}>
      <TestHeader testTheme={test.title} questionNumber={test.questions.findIndex((element) => element.text == activeQuestion.text) + 1 + '/' + test.questions.length}/>
      <Timer question={activeQuestion}/>
      <Question question={activeQuestion} action={submitQuestion}/>
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
