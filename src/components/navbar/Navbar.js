import React from 'react'
import styles from './navbar.module.css'
import Profile from '../profile/Profile'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className=''>
        <input/>
        <span>Search</span>
      </div>
      <Profile/>
    </nav>
  )
}

export default Navbar