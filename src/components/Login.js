import React from 'react'
import Password from './forms/Password'
import Button from './buttons/Button'
import styles from './forms/forms.module.css'
import Email from './forms/Email'
import login from '../assets/loginMobile.png'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/signup')
  }

  return (
    <div className={styles.forms} style={{ width: '50%' }}>
      <img src={login} className={styles.mobileImg} />
      <div className={styles.heading}> Login</div>
      <form>
        <Email />
        <Password />
        <div className={styles.button}>
          <Button text="Login" variant="primary" size="large" />
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
