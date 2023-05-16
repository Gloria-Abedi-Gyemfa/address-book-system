import React from 'react'
import authStyles from './authLayout.module.css'

const AuthLayout = ({Children}) => {
  return (
    <>
    <div className={authStyles.card}>{Children}</div>
    </>
  )
}

export default AuthLayout