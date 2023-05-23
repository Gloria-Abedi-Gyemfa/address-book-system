import React, {useState} from 'react'
import AuthLayout from '../components/services/authLayout'
import LoginCard from '../components/forms/login/LoginCard'
import Alert from '../components/alert/Alert'

const LoginPage = () => {
  return (
    <>
    <AuthLayout>
        <LoginCard />
     </AuthLayout>
    </>
  )
}

export default LoginPage