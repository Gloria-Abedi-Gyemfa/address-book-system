import React from 'react'
import styles from './forms.module.css'

const Name = ({name, setName}) => {
  return (
    <div className={styles.inputWrapper}>
      <label>Name</label>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default Name
