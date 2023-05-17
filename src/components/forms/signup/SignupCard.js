import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from '../../alert/Alert'
import SignupForm from './SignupForm'
import Card from '../../card/Card'

const SignupCard = () => {
  const [alert, setAlert] = useState({
    show: false,
    type: 'success',
    message: '',
  })

  const navigate = useNavigate()
  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
  // const namePattern = /^[a-zA-Z]+$/

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
      <SignupForm handleSubmit={handleSubmit}/>
      </Card>
    </>
  )
}

export default SignupCard
