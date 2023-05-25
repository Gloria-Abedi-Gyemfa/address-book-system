import React, {useState} from 'react'
import styles from './sideDrawer.module.css'
import {RiCloseFill} from 'react-icons/ri'

const SideDrawer = () => {
    const [showDrawer, setShowDrawer] = useState(false)
  return (
    <div className={styles.drawer}>
       
        <RiCloseFill className={styles.closeIcon} onClick={()=>setShowDrawer(!showDrawer)}/>
        
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