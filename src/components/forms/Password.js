import React from 'react'
import styles from './forms.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPassword } from '../../features/authSlice'

const Password = () => {
  const [visibility, setVisibility] = useState(false)
  const password = useSelector(state=>state.user.password)

  const dispatch = useDispatch()

  return (
    <div className={styles.inputWrapper}>
      <label>Password</label>
      <div>
        <input
          type={!visibility && 'password'}
          placeholder="********"
          value={password}
          onChange={e => dispatch(setPassword(e.target.value))}
          className={styles.input}
          required
        />
        {visibility ? null : (
          <FaEye
            style={{ marginLeft: '-32px', cursor:'pointer' }}
            onClick={() => setVisibility(true)}
          />
        )}

        {visibility && (
          <FaEyeSlash
            style={{ marginLeft: '-32px', cursor:'pointer' }}
            onClick={() => setVisibility(false)}
          />
        )}
      </div>
    </div>
  )
}

export default Password
