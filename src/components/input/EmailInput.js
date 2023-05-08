import React from 'react'

const EmailInput = ({ email, setEmail }) => {
  return (
    <div className="input-container">
      <label>Email :</label>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </div>
  )
}

export default EmailInput