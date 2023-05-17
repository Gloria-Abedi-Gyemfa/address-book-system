import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import EmailInput from '../input/EmailInput'
import PasswordInput from '../input/PasswordInput'
import Alert from '../feature/Alert'
import Api from '../services/api'
import Card from '../Card'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState(false)

  const [alert, setAlert] = useState({ show: false, message: '', type: '' })
  
  const navigate = useNavigate()
  
  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)    
    try {
      let response = await Api.post('/login', Object.fromEntries(data.entries()))
      if (response.data.success) {
        setLoader(true)
        setAlert({
          show: true,
          message: response.data.message,
          type: 'success',
        })
        setTimeout(() => {
          setAlert({ show: false })
          setLoader(false)
        }, 4000)
      }
      navigate('/dashboard')
    } catch (error) {
      setLoader(true)
      setAlert({
        show: true,
        message: JSON.stringify(error.response.data.message),
        type: 'error',
      })
      setTimeout(() => {
        setAlert({ show: false })
        setLoader(false)
      }, 4000)
      navigate('/')
    }
  }

  // const handleValidation = () =>{
  //   const error = ''
  // }

  return (
    <>
      {alert.show && <Alert message={alert.message} type={alert.type} />}
      <Card title='Login'>
      <form onSubmit={handleSubmit}>
        <EmailInput email={email} setEmail={setEmail} name={email} label='Email'/>
        <PasswordInput password={password} setPassword={setPassword} name={password} label='Password'/>
        <Button variant = 'primary' size='large' text='submit'loader={loader} setLoader={setLoader} handleSubmit={handleSubmit}/>
        <div className="alt">
          <Link to="/signup">Signup</Link>
        </div>
      </form>
      </Card>
    </>
  )
}

export default Login
