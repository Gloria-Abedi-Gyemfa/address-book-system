import React from 'react'
import styles from './cards.module.css'

const ContactCard = () => {
  return (
    <div className={styles.contact}>
      <div className='userImg'></div>
      <div className='contactDetails'>
        <p className='name'>Gloria</p>
        <p className='number'>+234567890</p>
        <p className='email'>akosuagyemfa@gmail.com</p>
      </div>
    </div>
  )
}

export default ContactCard