import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import Button from '../../button/Button'
import EmailInput from '../input/EmailInput'
import PasswordInput from '../input/PasswordInput'
import formStyles from '../forms.module.css'

const LoginForm = ({handleSubmit, loader}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
      <form onSubmit={handleSubmit} className={formStyles.forms}>
        <EmailInput email={email} setEmail={setEmail} label='email'/>
        <PasswordInput password={password} setPassword={setPassword} name={password} label='password'/>
        <Button variant = 'primary' size='large' text='submit' loader={loader}/>
        <p className={formStyles.alt}>Don't have account?<Link to="/" >
          Signup
          </Link></p> 
      </form>
      
  )
}

export default LoginForm
