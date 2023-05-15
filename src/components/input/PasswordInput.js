import React from 'react'

const PasswordInput = ({ password, setPassword, label }) => {
  return (
    <>
    <label>{label} :</label>
      <div>
        <input
        name={label}
        type={label}
        placeholder={`Enter your ${label}`}
        value={password}
        onChange={e => setPassword(e.target.value)}
        onFocus={e=>e.target.placeholder = ''}
        onBlur={e=>e.target.placeholder = {label}}
        required
      />
      <span>Password must be <br/>8-20 characters</span>
    </div>
    
    </>
      
  )
}

export default PasswordInput
