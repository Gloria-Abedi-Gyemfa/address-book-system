import React from 'react'
import styles from './forms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPhone } from '../../features/authSlice'

const Phone = () => {
  const phone = useSelector(state=>state.user.name)
  const dispatch = useDispatch()
  return (
    <div className={styles.inputWrapper}>
      <label>Phone</label>
      <div>
        <input
          type="number"
          placeholder="(233) 123456789"
          value={phone}
          onChange={e => dispatch(setPhone(e.target.value))}
          className={styles.input}
          required
        />
      </div>
    </div>
  )
}

export default Phone
