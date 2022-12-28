import styles from './Button.module.scss'

const Button = ({text, disabled, action}) => {
  return (
    <div onClick={disabled ? () => {}: () => action()}className={styles.button + ' ' + (disabled ? styles.disabled : '')}>{text} </div>
  )
}

export default Button
