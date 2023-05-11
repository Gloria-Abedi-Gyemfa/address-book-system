import React from 'react'

const EmailInput = ({ email, setEmail }) => {

  return (
    <>
      <label>Email :</label>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={e=>e.target.placeholder = ''}
          onBlur={e=>e.target.placeholder = "Enter your email"}
          required
        />
      </div>
      <div className='danger validationMessage'>Enter a valid email</div>
    </>
  )
}

export default EmailInput
