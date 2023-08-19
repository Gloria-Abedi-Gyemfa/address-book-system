import React from 'react'
import AuthLayout from '../components/services/authLayout'
import SignupCard from '../components/forms/signup/SignupCard'
import styles from './pages.module.css'

const SignupPage = () => {
  return (
    <div className={styles.formPage}>
    <AuthLayout>
      <SignupCard />
    </AuthLayout>
    </div>
  )
}

export default SignupPage