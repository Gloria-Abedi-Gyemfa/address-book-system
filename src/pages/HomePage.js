import React, {useState, useEffect} from 'react'
import ContactCard from '../components/cards/ContactCard'
import Navbar from '../components/navbar/Navbar'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import styles from './pages.module.css'
import Search from '../components/search/Search'
import person from '../assets/person_avatar.png'
import UserSidebar from '../components/navbar/UserSidebar'
import SingleContact from './SingleContact'

const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!Cookies.get('access_token')) {
      navigate('/login')
    }
  }, [])

  return (
    <div className={styles.home}>
      <Navbar text='Contacts'/>
      <div className={styles.body}>
        <div className={styles.search}>
          <Search/>
        </div>

        <div className={styles.content}>
          <div className={styles.sidebar}><UserSidebar/></div>
          <div className={styles.contactCard}><ContactCard /></div>
          <div className={styles.cotactDetails}><SingleContact/> </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage
