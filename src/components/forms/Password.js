import React from 'react'
import styles from './forms.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'

const Password = ({ password, setPassword }) => {
  const [visibility, setVisibility] = useState(false)
  return (
    <div className={styles.inputWrapper}>
      <label>Password</label>
      <div>
        <input
          type={!visibility && 'password'}
          placeholder="********"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        {visibility ? null : (
          <FaEye
            style={{ marginLeft: '-32px' }}
            onClick={() => setVisibility(true)}
          />
        )}

        {visibility && (
          <FaEyeSlash
            style={{ marginLeft: '-32px' }}
            onClick={() => setVisibility(false)}
          />
        )}
      </div>
    </div>
  )
}

export default Password
