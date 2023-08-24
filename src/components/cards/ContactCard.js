import React from 'react'
import styles from './cards.module.css'
import { ContactApi } from '../../services/api'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import addContact from '../../assets/add-contact-1.png'
import { useNavigate } from 'react-router'

const ContactCard = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // const response = await ContactApi.get('get-contact')
        const response = await axios.get(
          'https://address-book-system.onrender.com/api/v1/contact/get-contacts',
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('access_token')}`,
            },
          }
        )
        console.log(response)
        setData(response)
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts()
  }, [])

  return (
    <>
      {data.length > 0 ? (
        <div className={styles.contact}>
          <div className="userImg"></div>
          <div className="contactDetails">
            <p className="name">Gloria</p>
            <p className="number">+234567890</p>
            <p className="email">akosuagyemfa@gmail.com</p>
          </div>
        </div>
      ) : (
        <>
        <div className={styles.addContactWrapper}>
          <div className={styles.alert}>Have No Contact?</div>
          <img src={addContact} className={styles.addContactImg} />
          <button
            className={styles.addBtn}
            onClick={() => navigate('/add_contact')}
          >
            Add Contact{' '}
          </button>
        </div>

        <div className={styles.contacts} onClick={()=>navigate('/user_contact')}>
          <div className={styles.contactImage}>GG</div>
          <div className={styles.contactDetails}>
            <p className={styles.contactName}>Gloria</p>
            <p className={styles.contactNum}>02344567910</p>
          </div>
        </div>
        </>
      )}
    </>
  )
}

export default ContactCard
