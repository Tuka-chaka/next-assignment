import styles from './TestCounter.module.scss'
const TestCounter = ({count, isTime}) => {
  return (
    <div className={styles.testCounter}>
        {isTime? <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 11C23 10.4477 23.4477 10 24 10C24.5523 10 25 10.4477 25 11V12C25 12.5523 24.5523 13 24 13C23.4477 13 23 12.5523 23 12V11Z" fill="#006666"/>
<path d="M11 25C10.4477 25 10 24.5523 10 24C10 23.4477 10.4477 23 11 23H12C12.5523 23 13 23.4477 13 24C13 24.5523 12.5523 25 12 25H11Z" fill="#006666"/>
<path d="M23 36C23 35.4477 23.4477 35 24 35C24.5523 35 25 35.4477 25 36V37C25 37.5523 24.5523 38 24 38C23.4477 38 23 37.5523 23 37V36Z" fill="#006666"/>
<path d="M36 25C35.4477 25 35 24.5523 35 24C35 23.4477 35.4477 23 36 23H37C37.5523 23 38 23.4477 38 24C38 24.5523 37.5523 25 37 25H36Z" fill="#006666"/>
<path d="M23 17C23 16.4477 23.4477 16 24 16C24.5523 16 25 16.4477 25 17V25H23V17Z" fill="#006666"/>
<path d="M23 23H32C32.5523 23 33 23.4477 33 24C33 24.5523 32.5523 25 32 25H23V23Z" fill="#006666"/>
<circle cx="24" cy="24" r="17" stroke="#006666" stroke-width="2"/>
</svg>
:<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="17" stroke="#006666" stroke-width="2"/>
<path d="M16.8423 16.9062C16.8423 15.5636 17.4633 14.2759 18.5688 13.3265C19.6743 12.3771 21.1736 11.8438 22.737 11.8438H24.4212C25.9846 11.8438 27.484 12.3771 28.5894 13.3265C29.6949 14.2759 30.316 15.5636 30.316 16.9062C30.378 18.0019 30.083 19.088 29.4755 20.0011C28.868 20.9142 27.9808 21.6047 26.9475 21.9688C25.9143 22.4541 25.0271 23.3749 24.4196 24.5923C23.8121 25.8097 23.5171 27.2579 23.5791 28.7188" stroke="#006666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.5791 35.4688V35.4856" stroke="#006666" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
        <div className={styles.count}>{count}</div>
    </div>
  )
}

export default TestCounter
