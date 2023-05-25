import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../../alert/Alert'
import SignupForm from './SignupForm'
import Card from '../../card/Card'
import Cookies from 'js-cookie'
import Api from '../../services/api'

const SignupCard = () => {
  const [loader, setLoader] = useState(false)
  const [alert, setAlert] = useState({show: false, type: '', message: '' })

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)  
      try {
        setLoader(true)
        const response = await Api.post('/register', Object.fromEntries(data.entries())
        )
        if (response.data.success) {
          setAlert({
            show: true,
            type: 'success',
            message: response.data.message,
          })

          setTimeout(() => {
            setAlert({ show: false })
            setLoader(false)
            Cookies.set('userToken', response.data.access_token)
            Cookies.set('name', response.data.data.firstName)
            navigate('/dashboard')
          }, 2000)

        }
      } catch (error) {
        setAlert({
          show: true,
          type: 'error',
          message: error.response.data.message,
        })
        setLoader(true)
        setTimeout(() => {
          setAlert({ show: false })
          setLoader(false)
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
      <SignupForm handleSubmit={handleSubmit} loader={loader}/>
      </Card>
    </>
  )
}

export default SignupCard
