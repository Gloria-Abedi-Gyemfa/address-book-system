import React from 'react'
import Email from './forms/Email'
import Password from './forms/Password'
import Button from './buttons/Button'
import styles from './forms/forms.module.css'
import signup from '../assets/signupMobile.png'
import { useNavigate } from 'react-router'

const Signup = () => {
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/login')
  }

  const validateForm = () => {
    
  }

  return (
    <div className={styles.forms} style={{ width: '50%' }}>
      <img src={signup} className={styles.mobileImg} />
      <div className={styles.heading}> Create Account</div>
      <form>
        <Email />
        <Password />
        <div className={styles.button}>
          <Button text="Create Account" variant="primary" size="large" />
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
