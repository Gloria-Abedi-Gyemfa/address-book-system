import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import EmailInput from '../input/EmailInput'
import PasswordInput from '../input/PasswordInput'
import Alert from '../feature/Alert'
import Api from '../services/api'
import Card from '../Card'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })
  const navigate = useNavigate()
  const title = 'Login'
  

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let response = await Api.post('/login', { email, password })
      if (response.data.success) {
        setAlert({
          show: true,
          message: response.data.message,
          type: 'success',
        })
        setTimeout(() => {
          setAlert({ show: false })
        }, 4000)
      }
      navigate('/dashboard')
    } catch (error) {
      console.error(JSON.stringify(error.response.data.message))
      setAlert({
        show: true,
        message: JSON.stringify(error.response.data.message),
        type: 'error',
      })
      setTimeout(() => {
        setAlert({ show: false })
      }, 4000)
      navigate('/')
    }
  }

  return (
    <>
      {alert.show && <Alert message={alert.message} type={alert.type} />}
      <Card title={title}>
      <form onSubmit={handleSubmit}>
          <EmailInput email={email} setEmail={setEmail} />
          <PasswordInput password={password} setPassword={setPassword} />
        <Button />
        <div className="alt">
          <Link to="/signup">Signup</Link>
        </div>
      </form>
      </Card>
    </>
  )
}

export default Login
