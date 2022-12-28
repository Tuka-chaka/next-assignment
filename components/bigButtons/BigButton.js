import styles from './BigButton.module.scss'

const BigButton = ({text, disabled, action}) => {
  return (
    <div onClick={disabled ? () => {}: () => action()}className={styles.button + ' ' + (disabled ? styles.disabled : '')}>{text} </div>
  )
}

export default BigButton