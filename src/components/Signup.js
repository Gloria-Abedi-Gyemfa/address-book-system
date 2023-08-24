import React,{useEffect, useState} from 'react'
import Email from './forms/Email'
import Password from './forms/Password'
import Button from './buttons/Button'
import styles from './forms/forms.module.css'
import signup from '../assets/signupMobile.png'
import { useNavigate } from 'react-router'
import { RotatingLines } from 'react-loader-spinner'

import LastName from './forms/LastName'
import UserFirstName from './forms/UserFirstName'
import { useDispatch, useSelector } from 'react-redux'
import {signupUser } from '../features/authSlice'
import Alert from './alerts/Alert'

import Cookies from 'js-cookie'

const Signup = () => {
  const email = useSelector(state=>state.user.email)
  const firstName = useSelector(state=>state.user.firstName)
  const lastName = useSelector(state=>state.user.lastName)
  const password = useSelector(state=>state.user.password)
  const error = useSelector((state) => state.user.error)
  const response = useSelector(state=>state.user.response)
  const loading = useSelector(state=>state.user.loading)

  const [alert, setAlert]=useState('')
  const [close, setClose]= useState(false)
  const [validateError, setValidateError] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (response) {
      setAlert(response.message)
      sessionStorage.setItem('email', response.data.email)
      sessionStorage.setItem('firstName', response.data.firstName)
      sessionStorage.setItem('lastName', response.data.lastName)
      Cookies.set('access_token', response.data.access_token)
      Cookies.set('refresh_token', response.data.refresh_token)
      navigate('/')
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      setAlert(error.message)
      console.log('error', error);
    }
  }, [error]);

  const validateForm = () => {
    const newErrors = {}
    // Validate name
    if (firstName.trim() === '') {
      newErrors.firstName= 'First Name is required'
    }
    if (lastName.trim() === '') {
      newErrors.lastName = 'First Name is required'
    }

    // Validate email
    if (email.trim() === '') {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'
    }

    // Validate password
    if (password.trim() === '') {
      newErrors.password = 'Password is required'
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/.test(password)) {
      newErrors.password = 'Password must contain atleast one uppercase, one digit and one special character from the set @$!%*#?& and min(10)'
    }
    setValidateError(newErrors)
    return Object.keys(newErrors).length === 0
  };

  const handleSubmit =  e => {
    e.preventDefault()
    if (validateForm()) {
      dispatch(signupUser({firstName, lastName, email,  password}))
    }  
    
  }

  return (
    <div className={styles.forms} style={{ width: '50%' }}>

      {(response ||error) && <Alert text={alert}/>}
      {validateError.firstName && !close ?<Alert text={validateError.firstName} type='error' setClose={setClose}/>:''}
      {validateError.lastName && !close ?<Alert text={validateError.lastName} type='error' setClose={setClose}/>:''}
      {validateError.email && !close ?<Alert text={validateError.email} type='error' setClose={setClose}/>:''}
      {validateError.password && !close ?<Alert text={validateError.password} type='error' setClose={setClose}/>:''}

      <img src={signup} className={styles.mobileImg} />
      <div className={styles.heading}> Create Account</div>
      <form onSubmit={handleSubmit}>
        <UserFirstName  />
        <LastName />
        <Email/>
        <Password />
        <div className={styles.button}>
          {!loading ? (
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
        <span className={styles.option} onClick={()=>navigate('/login')}>
          Login
        </span>
      </div>
    </div>
  )
}

export default Signup
