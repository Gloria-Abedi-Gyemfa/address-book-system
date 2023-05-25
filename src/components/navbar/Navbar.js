import React from 'react'
import styles from './navbar.module.css'
import Profile from '../profile/Profile'
import Menu from '../menu/Menu'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <Menu/>
    <div className={styles.list}>
    <div>
    <div className={styles.home}>
    <p>Home</p>
    <div className={styles.homeHorizontalBar}></div>
    </div>
    </div>
    
    <div className={styles.contact}>
        <p>Contacts</p>
        <div className={styles.contactHorizontalBar}></div>
    </div>
    <Profile/>
    </div>
    </div>
  )
}

export default Navbar