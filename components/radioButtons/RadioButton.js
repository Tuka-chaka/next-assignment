import styles from './RadioButton.module.scss'

const RadioButton = ({ changed, id, isSelected, label, value, disabled}) => {
  return (
    <div onClick={disabled ? ()=>{} : () => changed(value)} className={styles.radioButton  + ' ' + (disabled ? styles.disabled : '') + ' ' + (isSelected ? styles.checked : '')} >
        <div className={styles.radio} >
            <div onClick={disabled ? ()=>{} : () => changed(value)} className={styles.radio__outer  + ' ' + (disabled ? styles.disabled : '') + ' ' + (isSelected ? styles.checked : '')} >
                <div className={styles.radio__dot}></div>
            </div>
        </div>
        {label}
    </div>
  )
}

export default RadioButton
