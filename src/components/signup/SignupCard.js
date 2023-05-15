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
  const [name, setName] = useState('')
  const [loader, setLoader] = useState(false)

  const [alert, setAlert] = useState({
    show: false,
    type: 'success',
    message: '',
  })
  const navigate = useNavigate()
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
  const namePattern = /^[a-zA-Z]+$/
  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    if(emailPattern.test(email) && passwordPattern.test(password) && namePattern.test(name)){
      setLoader(true)
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
      <SignupForm />
      </Card>
    </>
  )
}

export default Signup
