import React from 'react'
import styles from './forms.module.css'

const Address = ({ address, setAddress }) => {
  return (
    <div className={styles.inputWrapper}>
      <label>Address</label>
      <div>
        <input
          type="text"
          placeholder="town, city"
          value={address}
          onChange={e => setAddress(e.target.value)}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default Address
