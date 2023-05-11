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
          required
        />
      </div>
    </>
  )
}

export default EmailInput
