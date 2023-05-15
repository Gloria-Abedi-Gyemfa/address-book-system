import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from '../feature/Alert'
import Button from '../button/Button'
import EmailInput from '../input/EmailInput'
import PasswordInput from '../input/PasswordInput'
import TextInput from '../input/TextInput'
import Card from '../Card'

const SignupForm = ({ email, }) => {

  return (
    <>
      <form onSubmit={handleSubmit}>        
          <EmailInput email={email} setEmail={setEmail} label='Email'/>
          <PasswordInput password={password} setPassword={setPassword} label='Password' />
          <TextInput label='First Name'  setName={setName} name={name} />
          <TextInput label='Last Name' setName={setName} name={name}/>
          <Button variant = 'primary' size='large' text='submit' loader={loader} />
          <div className="alt">
            <Link to="/">Login</Link>
          </div>
      </form>
    </>
  )
}

export default SignupForm
