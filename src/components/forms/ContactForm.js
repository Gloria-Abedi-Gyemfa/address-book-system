import React from 'react'
import Email from './Email'
import Name from './Name'
import Phone from './Phone'
import Address from './Address'
import State from './State'
import Button from '../buttons/Button'
import styles from './forms.module.css'
import { useState } from 'react'
import { ContactApi } from '../../services/api'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await ContactApi.post('add-contact', { phone, email, name, address})
      console.log(response.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.forms}>
      <form onSubmit={handleSubmit}>
        <Name name={name} setName={setName} />
        <Phone phone={phone} setPhone={setPhone} />
        <Email email={email} setEmail={setEmail} />
        <Address address={address} setAddress={setAddress} />
        <State state={state} setState={setState} />
        <div className={styles.contactBtns}>
          <Button
            text="Save"
            variant="primary"
            size="medium"
            page="addContact"
          />
          <Button
            text="Cancel"
            variant="tertiary"
            size="medium"
            page="addContact"
          />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
