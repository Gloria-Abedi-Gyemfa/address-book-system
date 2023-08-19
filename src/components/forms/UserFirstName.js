import React from 'react'
import styles from './forms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName } from '../../features/authSlice'

const UserFirstName = () => {

  const firstName = useSelector(state=>state.user.firstName)
  const dispatch = useDispatch()

  return (
    <div className={styles.inputWrapper}>
      <label>First Name</label>
      <div>
        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={e => dispatch(setFirstName(e.target.value))}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default UserFirstName
