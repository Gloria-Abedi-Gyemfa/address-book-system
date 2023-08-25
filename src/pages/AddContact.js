import React from 'react'
import ContactForm from '../components/forms/ContactForm'
import Cookies from 'js-cookie'
import styles from './pages.module.css'
import Navbar from '../components/navbar/Navbar'

const AddContact = () => {
  return (
    <div className={styles.addContact}>
      <Navbar text='New Contact'/>
      <ContactForm />
    </div>
  )
}

export default AddContact
