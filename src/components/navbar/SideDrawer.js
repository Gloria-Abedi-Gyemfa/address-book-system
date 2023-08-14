import React from 'react'
import styles from './navbar.module.css'
import { useState } from 'react'
import Logout from '../modals/Logout'
import {useNavigate} from 'react-router'

const SideDrawer = ({setToggleDrawer}) => {
  const [showModal, setShowModal]=useState(false)

  const navigate = useNavigate()

  const handleToggles= (e)=>{
    e.stopPropagation() 
    setToggleDrawer(true)
  }

  return (
    <div className={styles.drawerWrapper} onClick={()=>setToggleDrawer(false)}>
      <div className={styles.drawerBackground}>
      <div className={styles.dropdown} onClick={()=>handleToggles}>
         <ul>
           <li className={`${styles.list} ${styles.list1}`} onClick={()=>navigate('/account_settings')}>Account Settings</li>
           <li className={styles.list} onClick={()=>navigate('/add_contact')}>Add Contact</li>
           <li className={styles.list}>Delete Contact</li>
           <li className={styles.list}>Settings/Theme</li>
           <li className={styles.list} onClick={()=>setShowModal(true)}>
             Logout
           </li>
         </ul>
       </div>
       {showModal && <Logout setShowModal={setShowModal}/>}
      </div>
    </div>
    

  )
}

export default SideDrawer
