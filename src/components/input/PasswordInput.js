import React from 'react'

const PasswordInput = ({ password, setPassword }) => {
  return (
    <div className="input-container">
      <label>Password :</label>
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>
  )
}

export default PasswordInput
