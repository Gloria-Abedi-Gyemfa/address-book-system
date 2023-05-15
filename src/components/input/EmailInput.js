import React from 'react'

const EmailInput = ({ email, setEmail, label }) => {

  return (
    <>
      <label>{label} :</label>
      <div>
        <input
          name={label}
          type={label}
          placeholder={`Enter your ${label}`}
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={e=>e.target.placeholder = ''}
          onBlur={e=>e.target.placeholder = 'Enter your Email'}
          required
        />
        <span>enter a valid email</span>
      </div>
      
    </>
  )
}

export default EmailInput
