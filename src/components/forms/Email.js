import React from 'react'
import styles from './forms.module.css'

const Email = () => {
  return (
    <div className={styles.inputWrapper}>
        <label>Email</label>
        <div>
            <input
                type='email'
                placeholder='Enter correct email'
                className={styles.input}
                />
        </div>
    </div>
  )
}

export default Email