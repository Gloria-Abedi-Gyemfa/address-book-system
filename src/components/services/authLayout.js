import React from 'react'
import authStyles from './authLayout.module.css'

const AuthLayout = ({children}) => {
  return (
    <>
    <div className={authStyles.card}>{children}</div>
    </>
  )
}

export default AuthLayout