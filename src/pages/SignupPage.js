import React from 'react'
import AuthLayout from '../components/services/authLayout'
import SignupCard from '../components/forms/signup/SignupCard'

const SignupPage = () => {
  return (
    <>
    <AuthLayout>
      <SignupCard />
    </AuthLayout>
    </>
  )
}

export default SignupPage