import React, { useState, useEffect } from 'react'
import Password from './forms/Password'
import Button from './buttons/Button'
import styles from './forms/forms.module.css'
import Email from './forms/Email'
import login from '../assets/loginMobile.png'
import { useNavigate } from 'react-router'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser} from '../features/authSlice'
import Cookies from 'js-cookie'
import Alert from './alerts/Alert'


const Login = () => {
  const email = useSelector(state=>state.user.email)
  const password = useSelector(state=>state.user.password)
  const loading = useSelector(state=>state.user.loading)
  const response = useSelector(state=>state.user.response)
  const error = useSelector(state=>state.user.error)

  const [alert, setAlert] = useState('')
  const [close, setClose]= useState(false)
  const [validateError, setValidateError] = useState({})
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if(response){
      setAlert(response.message)
      if (response.data) {
        sessionStorage.setItem('email', response.data.email);
        sessionStorage.setItem('firstName', response.data.firstName);
        sessionStorage.setItem('lastName', response.data.lastName);
        Cookies.set('access_token', response.data.access_token);
        Cookies.set('refresh_token', response.data.refresh_token);
        navigate('/')
    }
      
    }

    if (error) {
      setAlert(error.message)
      console.log('error', error.message);
    }
  }, [response, error])

  const validateForm = () => {
    const newErrors = {}
    
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

  const handleSubmit = e => {
    e.preventDefault()
    if(validateForm()){
      dispatch(loginUser({email, password}))
    }
    
  }

  return (
    <div className={styles.forms} style={{ width: '50%' }}>
      {(response || error) && !close ?<Alert text={alert} type={error ? 'error' : 'success'} setClose={setClose}/> : ''}
      {validateError.email && !close ?<Alert text={validateError.email} type='error' setClose={setClose}/>: ''}
      {validateError.password && !close ?<Alert text={validateError.password} type='error' setClose={setClose}/> : ''}
      
      <img src={login} className={styles.mobileImg} />
      <div className={styles.heading}> Login</div>
      <form onSubmit={handleSubmit}>
        <Email/>
        <Password />
        <div className={styles.button}>
          {!loading ? (
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
        <span className={styles.option} onClick={()=>navigate('/signup')}>
          Signup
        </span>
      </div>
    </div>
  )
}

export default Login
