import styles from './Radio.module.scss'

const Radio = ({ changed, id, isSelected, label, value, disabled}) => {
  return (
    
    <div className={styles.radio} >
        <div onClick={disabled ? ()=>{} : () => changed(value)} className={styles.radio__outer  + ' ' + (disabled ? styles.disabled : '') + ' ' + (isSelected ? styles.checked : '')} >
            <div className={styles.radio__dot}></div>
        </div>
    </div>
  )
}

export default Radio
