import React from 'react'
import Gallery from '../components/gallery/Gallery'
import styles from './pages.module.css'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div className={styles.authPage}>
      <Gallery page='login'/>
      <Login/>
    </div>
  )
}

export default LoginPage
