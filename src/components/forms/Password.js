import React from 'react'
import styles from './forms.module.css'
import {FaEye} from 'react-icons/fa'

const Password = () => {
  return (
    <div className={styles.inputWrapper}>
        <label>Password</label>
        <div>
            <input
                type='password'
                placeholder='********'
                className={styles.input}/>
            <FaEye style={{marginLeft: '-32px'}}/>
        </div>
    </div>
  )
}

export default Password