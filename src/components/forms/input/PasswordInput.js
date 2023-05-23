import React from 'react'
import inputStyles from './Input.module.css'

const PasswordInput = ({ password, setPassword, label }) => {
  return (
    <>
    <label className={inputStyles.label}>{label} :</label>
      <div className={inputStyles.inputWrapper}>
        <input
        name={label}
        type={label}
        placeholder={`Enter your ${label}`}
        value={password}
        onChange={e => setPassword(e.target.value)}
        onFocus={e=>e.target.placeholder = ''}
        onBlur={e=>e.target.placeholder = 'Enter your password'}
        className={inputStyles.input}
        required
      />
      <div className={inputStyles.alert}>Password must be <br/>8-20 characters</div>
    </div>
    
    </>
      
  )
}

export default PasswordInput
