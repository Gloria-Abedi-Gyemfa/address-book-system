import React from 'react'
import ContactForm from '../components/forms/ContactForm'
import Cookies from 'js-cookie'

const AddContact = () => {
  return (
    <div>
      <div>{Cookies.get('first_name')}</div>
      <div>{Cookies.get('email')}</div>
      <ContactForm />
    </div>
  )
}

export default AddContact
