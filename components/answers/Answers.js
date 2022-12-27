import styles from './Answers.module.scss'
import { useState } from 'react';
import RadioButton from '../radioButtons/RadioButton';
const Answers = ({question, action}) => {

    const [radioValue, setRadioValue] = useState("beb");

    const radioChangeHandler = (value) => {
        setRadioValue(value);
    };

    const [radioButtonValue, setRadioButtonValue] = useState("beb");

    const radioButtonChangeHandler = (value) => {
        setRadioButtonValue(value)
        action(value)
    };
    const secondColumnStart = Math.floor(question.answers.length / 2);


    return (
        <div className={styles.answers}>
          <div className={styles.row}>
          {question.answers.slice(0,secondColumnStart).map(answer => 
          <RadioButton
          changed={radioButtonChangeHandler}
          id="1"
          isSelected={radioButtonValue === answer.text}
          label={answer.text}
          value={answer.text}/>)}

        </div>
        <div className={styles.row}>
          {question.answers.slice(secondColumnStart).map(answer => 
          <RadioButton
          changed={radioButtonChangeHandler}
          id="1"
          isSelected={radioButtonValue === answer.text}
          label={answer.text}
          value={answer.text}/>)}
        </div>

        </div>
    )
}

export default Answers
