import React from 'react'
import { useEffect } from 'react'
import ContactCard from '../components/cards/ContactCard'
import Navbar from '../components/navbar/Navbar'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import styles from './pages.module.css'
import Search from '../components/search/Search'

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
        <ContactCard />
      </div>
      
    </div>
  )
}

export default HomePage
