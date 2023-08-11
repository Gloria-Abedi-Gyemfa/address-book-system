import React from 'react'
import Email from './Forms/Email'
import Password from './Forms/Password'
import Button from './buttons/Button'
import styles from './Forms/forms.module.css'

const Signup = () => {
  return (
    <div className={styles.forms} style={{width:'50%'}}>
        <div className={styles.heading}> Create Account</div>
        <form>
            <Email/>
            <Password/>
            <div className={styles.button}>
                <Button text='Create Account' variant='primary' size='large'/>
            </div>
        </form>
        <div className={styles.authOption}>Already have an account? <span className={styles.option}>Login</span></div>
    </div>
  )
}

export default Signup