import React from 'react'
import Email from './forms/Email'
import Password from './forms/Password'
import Button from './buttons/Button'
import styles from './forms/forms.module.css'
import signup from '../assets/signupMobile.png'
import { useNavigate } from 'react-router'
import {  AuthApi } from '../services/api'
import { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import Cookies from 'js-cookie'

import LastName from './forms/LastName'
import UserFirstName from './forms/UserFirstName'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/login')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== ''
    ) {
      setLoader(true)
    } else {
      alert('Fill all inputs')
    }
    try {
      const response = await AuthApi.post('register', {
        email,
        firstName,
        lastName,
        password,
      })
      console.log(response.data.message)
      if (response.data.success === true) {
        navigate('/')
        Cookies.set('access_token', response.data.data.access_token)
        Cookies.set('refresh_token', response.data.data.refresh_token)
        Cookies.set('email', response.data.data.email)
        Cookies.set('first_name', response.data.data.firstName)
        Cookies.set('last_name', response.data.data.lastName)
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
      <img src={signup} className={styles.mobileImg} />
      <div className={styles.heading}> Create Account</div>
      <form onSubmit={handleSubmit}>
        <Email email={email} setEmail={setEmail} />
        <UserFirstName firstName={firstName} setFirstName={setFirstName} />
        <LastName lastName={lastName} setLastName={setLastName} />
        <Password password={password} setPassword={setPassword} />
        <div className={styles.button}>
          {!loader ? (
            <Button
              text="Create Account"
              variant="primary"
              size="large"
              page="auth"
            />
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
        Already have an account?{' '}
        <span className={styles.option} onClick={handleNavigation}>
          Login
        </span>
      </div>
    </div>
  )
}

export default Signup
