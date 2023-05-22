import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'
import EmailInput from '../input/EmailInput'
import PasswordInput from '../input/PasswordInput'
import TextInput from '../input/TextInput'
import formStyles from '../forms.module.css'

const SignupForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loader, setLoader] = useState(false)

  return (
    <>
      <form onSubmit={handleSubmit}>        
          <EmailInput email={email} setEmail={setEmail} label='Email'/>
          <PasswordInput password={password} setPassword={setPassword} label='Password' />
          <TextInput label='First Name'  setName={setName} name={name} />
          <TextInput label='Last Name' setName={setName} name={name}/>
          <Button variant = 'primary' size='large' text='submit' loader={loader} />
          <div className={formStyles.alt}>
            <Link to="/">
              <Button variant='secondary' size='large' text='Login'/>
            </Link>
          </div>
      </form>
    </>
  )
}

export default SignupForm
