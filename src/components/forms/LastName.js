import React from 'react'
import styles from './forms.module.css'

const LastName = ({lastName, setLastName}) => {
  return (
    <div className={styles.inputWrapper}>
      <label>Last Name</label>
      <div>
        <input
          type="text"
          placeholder="Enter your Last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default LastName
