import React from 'react'
import { useState } from 'react'

const EmailInput = ({ email, setEmail, label }) => {
  const [error, setError] = useState(true)
  if(email.trim() !== ''){
    setError(false)
  }

  return (
    <>
      <label>{label} :</label>
      <div>
        <input
          name={email}
          type={email}
          placeholder={`Enter your ${label}`}
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={e=>e.target.placeholder = ''}
          onBlur={e=>e.target.placeholder = {label}}
          required
        />
      </div>
      {error && <div className='danger validationMessage valis'>Enter a valid email</div>}
      
    </>
  )
}

export default EmailInput
