import React from 'react'
import inputStyles from './Input.module.css'
import {FaRegEyeSlash, FaRegEye} from 'react-icons/fa'
import { useState } from 'react'

const PasswordInput = ({ password, setPassword, label }) => {
  const [visible, setVisible] = useState(false)
  const inputType = visible ? 'text': 'password'

  return (
    <>
    <label className={inputStyles.label}>{label} :</label>
      <div className={inputStyles.inputWrapper}>
        <input
        name={label}
        type={inputType}
        placeholder={`Enter your ${label}`}
        value={password}
        onChange={e => setPassword(e.target.value)}
        onFocus={e=>e.target.placeholder = ''}
        onBlur={e=>e.target.placeholder = 'Enter your password'}
        className={inputStyles.input}
        minLength='8'
        required
      />
      <span className={inputStyles.eyeToggle}>
        <FaRegEye
         onClick={() => setVisible(!visible)}
        className={visible ? inputStyles. eyeInvisible : inputStyles. eyevisible} 
        />
        <FaRegEyeSlash
        onClick={() => setVisible(!visible)} 
        className={visible ? inputStyles.eyeSlashVisible : inputStyles.eyeSlashInvisible} />
      </span>
      <div className={inputStyles.alert}>Password must be 8-20 characters</div>
    </div>
    
    </>
      
  )
}

export default PasswordInput
