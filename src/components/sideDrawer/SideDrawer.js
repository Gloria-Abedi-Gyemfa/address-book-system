import React, {useState} from 'react'
import styles from './sideDrawer.module.css'


const SideDrawer = () => {
    
  return (
       <div className={styles.drawer}>
        <ul >
          <li>Home</li>
         <li>Contacts</li>
         <li>Profile</li>
          <li>Logout</li>
        </ul>
  </div>
   
  )
}

export default SideDrawer