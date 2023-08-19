import React from 'react'
import styles from './navbar.module.css'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'

const SideDrawer = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    Cookies.remove('access_token')
    navigate('/login')
  }
  return (
    <div className={styles.dropdown}>
      <ul>
        <li className={styles.list}>Add Contact</li>
        <li className={styles.list}>Delete Contact</li>
        <li className={styles.list}>Account Settings</li>
        <li className={styles.list}>Settings/Theme</li>
        <li className={styles.list} onClick={handleLogout}>
          Logout
        </li>
      </ul>
    </div>
  )
}

export default SideDrawer
