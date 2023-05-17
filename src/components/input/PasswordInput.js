import React from 'react'

const PasswordInput = ({ password, setPassword, label }) => {
  return (
    <>
    <label>{label} :</label>
      <div>
        <input
        name={password}
        type={password}
        placeholder={`Enter your ${label}`}
        value={password}
        onChange={e => setPassword(e.target.value)}
        onFocus={e=>e.target.placeholder = ''}
        onBlur={e=>e.target.placeholder = {label}}
        required
      />
    </div>
    <div className='danger validationMessage'>Must be 8-20 characters<br/>must include special characters</div>
    </>
      
  )
}

export default PasswordInput
