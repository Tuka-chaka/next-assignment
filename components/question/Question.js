import Answers from '../answers/Answers'
import styles from './Question.module.scss'
import Button from '../buttons/Button'
import { useState } from 'react'

const Question = ({question, action, onSubmit, isLast}) => {

  const [answer, setAnswer] = useState('')
  
  const submit = () => {
    onSubmit(answer)
  }



  return (
    <div className={styles.question}>
        <div className={styles.question__theme}>{question.text}</div>
        <Answers question={question} action={(value) => setAnswer(value)}/>
        <div className={styles.button__group}>
        <Button text={'Пропустить'} action={action} disabled={isLast}/>
        <Button text={isLast ? 'Завершить' : 'Ответить'} action={submit}/>
        </div>
    </div>
  )
}

export default Question