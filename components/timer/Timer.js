import { useEffect, useState } from 'react';
import styles from './Timer.module.scss'

const Timer = ({question}) => {

  const timeLimit = question.timeLimit
  const [displayTime, setDisplayTime] = useState(timeLimit)
  const [circleDashArray, setCircleDashArray] = useState ("283 283")

  let timePassed = 0;
  let timeLeft = timeLimit;

  const startTimer = () => setInterval(() => {
    if(timeLeft){
    timePassed = timePassed += 1;
    timeLeft = displayTime - timePassed;
    setDisplayTime(timeLeft)
    }
  }, 1000)

  useEffect(() => {
    setCircleDashArray(`283 ${(283 - ((displayTime / timeLimit) * 283)).toFixed(0)}`)

  }, [displayTime])

  useEffect(() => startTimer, []) 

  function formatTimeLeft(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  return (
    <div className={styles.timer}>
      <svg className={styles.timer__svg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className={styles.timer__circle}>
        <circle className={styles.timer__path_elapsed} cx="50" cy="50" r="45" />
        <path
        stroke-dashoffset="283"
        stroke-dasharray={circleDashArray}
        className={styles.timer__path_remaining}
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
        </g>
      </svg>
      <span className={styles.timer__label}>
      {formatTimeLeft(displayTime)}
      </span>
    </div>
  )
}

export default Timer
