import React from 'react'
import inputStyles from './Input.module.css'

const EmailInput = ({ email, setEmail, label }) => {

  return (
    <>
      <label className={`${inputStyles.label}`}>{label} :</label>
      <div className={inputStyles.inputWrapper}>
        <input
          name={label}
          type={label}
          placeholder={`Enter your ${label}`}
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={e=>e.target.placeholder = ''}
          onBlur={e=>e.target.placeholder = 'Enter your Email'}
          className={inputStyles.input}
          required
        />
        <div className={inputStyles.alert}>enter a valid email</div>
      </div>
      
    </>
  )
}

export default EmailInput
