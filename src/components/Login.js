import React from 'react'
import Password from './forms/Password'
import Button from './buttons/Button'
import styles from './forms/forms.module.css'
import Email from './forms/Email'
import login from '../assets/loginMobile.png'
import { useNavigate } from 'react-router'
import { Api } from '../services/api'
import { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import Cookies from 'js-cookie'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState(false)

  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/signup')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (email.trim() !== '' && password.trim() !== '') {
      setLoader(true)
    } else {
      alert('fill all fields')
    }
    try {
      const response = await Api.post('login', { email, password })
      console.log(response)
      if (response.data.success === true) {
        navigate('/')
        Cookies.set('access_token', response.data.data.access_token)
        Cookies.set('refresh_token', response.data.data.refresh_token)
        Cookies.set('email', response.data.data.email)
        Cookies.set('first_name', response.data.data.firstName)
        Cookies.set('last_name', response.data.data.lastName)
        Cookies.set('_id', response.data.data._id)
      }
    } catch (error) {
      console.log(error)
      setTimeout(() => {
        setLoader(false)
      }, 3000)
    }
  }

  return (
    <div className={styles.forms} style={{ width: '50%' }}>
      <img src={login} className={styles.mobileImg} />
      <div className={styles.heading}> Login</div>
      <form onSubmit={handleSubmit}>
        <Email email={email} setEmail={setEmail} />
        <Password password={password} setPassword={setPassword} />
        <div className={styles.button}>
          {!loader ? (
            <Button text="Login" variant="primary" size="large" page="auth" />
          ) : (
            <div className={styles.spinner}>
              <RotatingLines
                strokeColor="blue"
                strokeWidth="4.5"
                animationDuration="0.95"
                width="56"
                visible={true}
              />
            </div>
          )}
        </div>
      </form>
      <div className={styles.authOption}>
        Don't have an account?{' '}
        <span className={styles.option} onClick={handleNavigation}>
          Signup
        </span>
      </div>
    </div>
  )
}

export default Login
