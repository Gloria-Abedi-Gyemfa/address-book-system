import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from '../feature/Alert'
import Button from '../button/Button'
import EmailInput from '../input/EmailInput'
import PasswordInput from '../input/PasswordInput'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [alert, setAlert] = useState({
    show: false,
    type: 'success',
    message: '',
  })
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `https://address-book-system.onrender.com/api/v1/auth/register`,
        {
          email,
          password,
          firstName,
          lastName,
        }
      )
      if (response.data.success) {
        setAlert({
          show: true,
          type: 'success',
          message: response.data.message,
        })
        setTimeout(() => {
          setAlert({ show: false })
        }, 2000)
      }
      navigate('/dashboard')
      console.log(response.data.message)
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        message: error.response.data.message,
      })
      setTimeout(() => {
        setAlert({ show: false })
      }, 2000)
      navigate('/signup')
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      alert.show = false
    }, 3000)
  })

  return (
    <>
      {alert.show && <Alert type={alert.type} message={alert.message} />}

      <form onSubmit={handleSubmit}>
        <h1 className="heading">Signup</h1>
        
          <EmailInput email={email} setEmail={setEmail} />

          <PasswordInput password={password} setPassword={setPassword} />
          <div className="form-group-first">
            <label>First Name:</label>
            <input
              name="name"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="e.g john"
            />
          </div>
          <div className="form-group-last">
            <label>Last Name:</label>
            <input
              name="name"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="e.g Doe"
            />
          </div>
          <Button />
          <div className="alt">
            <Link to="/">Login</Link>
          </div>
      
      </form>
    </>
  )
}

export default Signup
