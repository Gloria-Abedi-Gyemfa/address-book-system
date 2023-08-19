import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'
import EmailInput from '../input/EmailInput'
import PasswordInput from '../input/PasswordInput'
import TextInput from '../input/TextInput'
import formStyles from '../forms.module.css'

const SignupForm = ({ handleSubmit, loader }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  return (
    <>
      <form onSubmit={handleSubmit} className={formStyles.forms}>        
          <EmailInput email={email} setEmail={setEmail} label='email'/>
          <PasswordInput password={password} setPassword={setPassword} label='password' />
            <TextInput label='firstName'  setName={setFirstName} name={firstName} />
          <TextInput label='lastName' setName={setLastName} name={lastName}/>
          <Button variant = 'primary' size='large' text='Submit' loader={loader}/>
          <p className={formStyles.alt}>Already have account?<Link to="/" >
          Login
          </Link></p>                  
      </form>
    </>
  )
}

export default SignupForm
