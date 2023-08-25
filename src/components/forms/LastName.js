import React from 'react'
import styles from './forms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLastName } from '../../features/authSlice'

const LastName = () => {
  const lastName = useSelector(state=>state.user.lastName)
  const dispatch = useDispatch()
  return (
    <div className={styles.inputWrapper}>
      <label>Last Name</label>
      <div>
        <input
          type="text"
          placeholder={sessionStorage.getItem('lastName')}
          value={sessionStorage.getItem('lastName')}
          onChange={e => dispatch(setLastName(e.target.value))}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default LastName
