import React from 'react'
import styles from './forms.module.css'

const UserFirstName = ({firstName, setFirstName}) => {
  return (
    <div className={styles.inputWrapper}>
      <label>First Name</label>
      <div>
        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default UserFirstName
