import React from 'react'
import styles from './forms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '../../features/authSlice'

const Address = () => {
  const address = useSelector(state=>state.user.address)
  const dispatch = useDispatch()
  return (
    <div className={styles.inputWrapper}>
      <label>Address</label>
      <div>
        <input
          type="text"
          placeholder="town, city"
          value={address}
          onChange={e => dispatch(setAddress(e.target.value))}
          className={styles.input}
        />
      </div>
    </div>
  )
}

export default Address
