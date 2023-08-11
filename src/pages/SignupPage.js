import React from 'react'
import Gallery from '../components/gallery/Gallery'
import Signup from '../components/Signup'
import styles from './pages.module.css'

const SignupPage = () => {
  return (
    <div className={styles.authPage}>
      <Gallery page='signup'/>
      <Signup/>
    </div>
  )
}

export default SignupPage
