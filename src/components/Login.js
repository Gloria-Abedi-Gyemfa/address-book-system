import React from 'react'
import Email from './Forms/Email'
import Password from './Forms/Password'
import Button from './buttons/Button'
import styles from './Forms/forms.module.css'

const Login = () => {
  return (
    <div className={styles.forms} style={{width:'50%'}}>
        <div className={styles.heading}> Login</div>
        <form>
            <Email/>
            <Password/>
            <div className={styles.button}>
                <Button text='Login' variant='primary' size='large'/>
            </div>
        </form>
        <div className={styles.authOption}>Don't have an account? <span className={styles.option}>Signup</span></div>
    </div>
  )
}

export default Login