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
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, signupUser } from '../features/authSlice'

const Signup = () => {
  const email = useSelector(state=>state.user.email)
  const firstName = useSelector(state=>state.user.firstName)
  const lastName = useSelector(state=>state.user.lastName)
  const password = useSelector(state=>state.user.password)
  const response = useSelector((state) => state.user.response);
  const dispatch = useDispatch()

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
    dispatch(signupUser({firstName, lastName, email,  password}))
    console.log(response);
  }

  return (
    <div className={styles.forms} style={{ width: '50%' }}>
      <img src={signup} className={styles.mobileImg} />
      <div className={styles.heading}> Create Account</div>
      <form onSubmit={handleSubmit}>
        <UserFirstName  />
        <LastName />
        <Email/>
        <Password />
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
