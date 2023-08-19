import React from 'react'
import styles from './forms.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail } from '../../features/authSlice'

const Email = () => {
  const email = useSelector(state=>state.user.email)
  const dispatch = useDispatch()
  return (
    <div className={styles.inputWrapper}>
      <label>Email</label>
      <div>
        <input
          type="email"
          placeholder="Enter correct email"
          value={email}
          onChange={e => dispatch(setEmail(e.target.value))}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default Email
