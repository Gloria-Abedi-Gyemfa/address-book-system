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
      <form onSubmit={handleSubmit}>        
          <EmailInput email={email} setEmail={setEmail} label='Email'/>
          <PasswordInput password={password} setPassword={setPassword} label='Password' />
          <TextInput label='First Name'  setName={setName} name={firstName} />
          <TextInput label='Last Name' setName={setName} name={lastName}/>
          <Button variant = 'primary' size='large' text='submit' loader={loader}/>
          <p className={formStyles.alt}>or</p>
          <Link to="/" >
            <Button variant='secondary' size='large' text='Login' />
          </Link>         
      </form>
    </>
  )
}

export default SignupForm
