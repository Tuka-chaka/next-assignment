import styles from './Sidebar.module.scss'
const Sidebar = ({questions, action}) => {
  return (
    <div className={styles.sidebar}>
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99975 18.0002C8.74375 18.0002 8.48775 17.9023 8.29275 17.7073L0.29275 9.70725C-0.0982494 9.31625 -0.0982494 8.68425 0.29275 8.29325L8.29275 0.29325C8.68375 -0.09775 9.31575 -0.09775 9.70675 0.29325C10.0978 0.68425 10.0978 1.31625 9.70675 1.70725L2.41375 9.00025L9.70675 16.2932C10.0978 16.6842 10.0978 17.3162 9.70675 17.7073C9.51175 17.9023 9.25575 18.0002 8.99975 18.0002Z" fill="black"/>
</svg>
    <div className={styles.progress}>
      {questions.map((question, i) => <div className={styles.number} onClick={() => action(i)}>{i + 1}</div>)}
    </div>
    </div>
  )
}

export default Sidebar
