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
      <form onSubmit={handleSubmit}>
        <EmailInput email={email} setEmail={setEmail} label='Email'/>
        <PasswordInput password={password} setPassword={setPassword} name={password} label='Password'/>
        <Button variant = 'primary' size='large' text='submit' loader={loader}/>
        <Link to="signup">
          <Button variant='secondary' size='large' text='Signup' />
        </Link>
      </form>
      
  )
}

export default LoginForm
