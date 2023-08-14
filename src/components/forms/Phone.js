import React from 'react'
import styles from './forms.module.css'

const Phone = ({phone, setPhone}) => {
  return (
    <div className={styles.inputWrapper}>
      <label>Phone</label>
      <div>
        <input
          type="number"
          placeholder="(233) 123456789"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default Phone
