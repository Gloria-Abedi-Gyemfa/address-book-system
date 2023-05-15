import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from '../feature/Alert'
import Button from '../button/Button'
import EmailInput from '../input/EmailInput'
import PasswordInput from '../input/PasswordInput'
import TextInput from '../input/TextInput'
import Card from '../Card'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [alert, setAlert] = useState({
    show: false,
    type: 'success',
    message: '',
  })
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    try {
      const response = await axios.post(
        `https://address-book-system.onrender.com/api/v1/auth/register`,
        Object.fromEntries(data.entries())
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
      <Card title = 'Signup'>
      <form onSubmit={handleSubmit}>        
          <EmailInput email={email} setEmail={setEmail} label='Email'/>
          <PasswordInput password={password} setPassword={setPassword} label='Password' />
          <TextInput label='First Name'  validationMessage='cannot include special characters'/>
          <TextInput label='Last Name' validationMessage={`cannot include special characters`}/>
          <Button variant = 'primary' size='large' text='submit'/>
          <div className="alt">
            <Link to="/">Login</Link>
          </div>
      </form>
      </Card>
    </>
  )
}

export default Signup
