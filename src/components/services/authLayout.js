import React from 'react'
import authStyles from './authLayout.module.css'
import authImage from '../assets/authImage.jpg'

const AuthLayout = ({children}) => {
  return (
    <>
    <div className={authStyles.card}>{children}</div>
    </> 
  )
}

export default AuthLayout