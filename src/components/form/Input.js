import React, {useContext, useState} from 'react'
import FormContext from './Login'
import styles from './form.module.css'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Input = ({label, type, name, setInputValue, placeholder, inputValue, isFirst}) => {
    const [visible, setVisible] = useState(false)
  const inputType = visible ? 'text': 'password'

  return (
    <div className={styles.inputField}>
        <label className={styles.label}>{label}</label>
        <div>
            <input 
                placeholder={placeholder} 
                type={name === 'password' ? inputType : type} 
                name={name}
                value={inputValue}
                onChange={setInputValue}
                onBlur={e=>e.target.placeholder=`Enter your ${name}`}
                onFocus={e=>e.target.placeholder = `Enter a valid ${name}`}
                className={styles.input}
                required
             />
             {name==='password' ? <span className={styles.eyeToggle}>
        <FaRegEye
         onClick={() => setVisible(!visible)}
        className={visible ?styles. eyeInvisible :styles. eyevisible} 
        />
        <FaRegEyeSlash
        onClick={() => setVisible(!visible)} 
        className={visible ? styles.eyeSlashVisible : styles.eyeSlashInvisible} />
      </span>
      : undefined
      }
        </div>
        <p></p>
    </div>
  )
}

export default Input