import React from 'react'
import styles from './forms.module.css'

const Email = ({email, setEmail}) => {
  return (
    <div className={styles.inputWrapper}>
      <label>Email</label>
      <div>
        <input
          type="email"
          placeholder="Enter correct email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default Email
