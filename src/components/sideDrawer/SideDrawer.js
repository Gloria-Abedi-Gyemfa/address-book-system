import React, {useState} from 'react'
import styles from './sideDrawer.module.css'
import Menu from '../menu/Menu'
import {FiLogOut} from 'react-icons/fi'


const SideDrawer = () => {
    
  return (
       <div className={styles.drawer}>
        <Menu/>
        <ul >
          <li>Home</li>
         <li>Contacts</li>
         <li>Profile</li>
          <li className={styles.logout}> <FiLogOut/> Logout</li>
        </ul>
  </div>
   
  )
}

export default SideDrawer