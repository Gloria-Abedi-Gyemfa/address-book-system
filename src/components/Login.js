import React from 'react'
import Password from './forms/Password'
import Button from './buttons/Button'
import styles from './forms/forms.module.css'
import Email from './forms/Email'
import login from '../assets/loginMobile.png'
import { useNavigate } from 'react-router'
import { AuthApi } from '../services/api'
import { useState } from 'react' 
import { RotatingLines } from 'react-loader-spinner'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser} from '../features/authSlice'


const Login = () => {
  const email = useSelector(state=>state.user.email)
  const password = useSelector(state=>state.user.password)
  const [loader, setLoader] = useState(false)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavigation = () => {
    navigate('/signup')
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(loginUser({email, password}))
    console.log('hello');
  }

  return (
    <div className={styles.forms} style={{ width: '50%' }}>
      <img src={login} className={styles.mobileImg} />
      <div className={styles.heading}> Login</div>
      <form onSubmit={handleSubmit}>
        <Email/>
        <Password  />
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
