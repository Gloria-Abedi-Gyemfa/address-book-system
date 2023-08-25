import React from 'react'
import styles from './forms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../features/authSlice'

const Name = () => {
  const name = useSelector(state=>state.user.name)
  const dispatch = useDispatch()
  return (
    <div className={styles.inputWrapper}>
      <label>Name</label>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={e => dispatch(setName(e.target.value))}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default Name
