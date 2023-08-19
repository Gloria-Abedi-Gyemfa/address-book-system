import React from 'react'
import styles from './forms.module.css'

const State = ({ state, setState }) => {
  return (
    <div className={styles.inputWrapper}>
      <label>State</label>
      <div>
        <input
          type="text"
          placeholder="zip code"
          value={state}
          onChange={e => setState(e.target.value)}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default State
