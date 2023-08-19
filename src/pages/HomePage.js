import React from 'react'
import { useEffect } from 'react'
import ContactCard from '../components/cards/ContactCard'
import Navbar from '../components/navbar/Navbar'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import styles from './pages.module.css'

const HomePage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!Cookies.get('access_token')) {
      navigate('/login')
    }
  }, [])

  return (
    <div className={styles.home}>
      <Navbar />
      <div>
        <input type="text" placeholder="search..." />
      </div>
      <ContactCard />
    </div>
  )
}

export default HomePage
