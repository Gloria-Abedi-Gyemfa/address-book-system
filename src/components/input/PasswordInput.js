import React from 'react'

const PasswordInput = ({ password, setPassword }) => {
  return (
    <>
    <label>Password :</label>
      <div>
        <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onFocus={e=>e.target.placeholder = ''}
        onBlur={e=>e.target.placeholder = 'Enter your password'}
        required
      />
    </div>
    <div className='danger validationMessage'>Must be 8-20 characters<br/>must include special characters</div>
    </>
      
  )
}

export default PasswordInput
