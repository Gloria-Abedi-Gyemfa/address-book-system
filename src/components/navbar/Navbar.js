import React from 'react'
import styles from './navbar.module.css'
import logo from '../assets/id-card.png'

import assetStyle from '../assets/assets.module.css'
import Profile from '../profile/Profile'
import Menu from '../menu/Menu'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <Menu/>
    <div className={styles.list}>
    <div>
    {/* <Link to={<Home/>}> */}
    <p>Home</p>
    <div className={styles.homeHorizontalBar}></div>
    {/* </Link> */}
    </div>
    
    <div>
        <p>Contacts</p>
        <div className={styles.contactHorizontalBar}></div>
    </div>
    <Profile/>
    </div>
    </div>
  )
}

export default Navbar