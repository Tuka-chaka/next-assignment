import Answers from '../answers/Answers'
import styles from './Question.module.scss'
import Button from '../buttons/Button'
import { useState } from 'react'

const Question = ({question, action}) => {

  const [answer, setAnswer] = useState('')
  
  const submit = () => {
    console.log(answer)
    action()
  }

  return (
    <div className={styles.question}>
        <div className={styles.question__theme}>{question.text}</div>
        <Answers question={question} action={(value) => setAnswer(value)}/>
        <div className={styles.button__group}>
        <Button text={'Пропустить'} />
        <Button text={'Ответить'} action={submit}/>
        </div>
    </div>
  )
}

export default Question