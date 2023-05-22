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
<<<<<<< Updated upstream
  const [name, setName] = useState('')
  const [loader, setLoader] = useState(false)
=======
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
>>>>>>> Stashed changes

  return (
    <>
      <form onSubmit={handleSubmit}>        
          <EmailInput email={email} setEmail={setEmail} label='Email'/>
          <PasswordInput password={password} setPassword={setPassword} label='Password' />
<<<<<<< Updated upstream
          <TextInput label='First Name'  setName={setName} name={name} />
          <TextInput label='Last Name' setName={setName} name={name}/>
          <Button variant = 'primary' size='large' text='submit' loader={loader} />
          <div className={formStyles.alt}>
            <Link to="/">Login</Link>
          </div>
=======
          <TextInput label='First Name'  setName={setFirstName} name={firstName} />
          <TextInput label='Last Name' setName={setLastName} name={lastName}/>
          <Button variant = 'primary' size='large' text='submit' loader={loader}/>
          <p className={formStyles.alt}>or</p>
          <Link to="/" >
            <Button variant='secondary' size='large' text='Login' />
          </Link>         
>>>>>>> Stashed changes
      </form>
    </>
  )
}

export default SignupForm
