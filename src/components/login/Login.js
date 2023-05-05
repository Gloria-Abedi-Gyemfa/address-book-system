import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Email from '../input/Email'
import Password from '../input/Password'
import Button from '../button/Button'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let response = await axios.post(
        `https://address-book-system.onrender.com/api/v1/auth/login`,
        { email, password }
      )
      if (response.data.success) {
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="heading">Login</section>
      <section className="form-center">
        <Email email={email} setEmail={setEmail} />
        <Password password={password} setPassword={setPassword} />
        {/* <Text /> */}
        <Button />
        <div className="alt">
          <Link to="/signup">Signup</Link>
        </div>
      </section>
    </form>
  )
}

export default Login
