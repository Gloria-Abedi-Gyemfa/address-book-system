import React from 'react'
import styles from './navbar.module.css'

const SideDrawer = () => {
  return (
    <div className={styles.dropdown}>
      <div>Add Contact</div>
      <div>Delete Contact</div>
      <div>Account Settings</div>
      <div>Settings/Theme</div>
      <div>Logout</div>
    </div>
  )
}

export default SideDrawer
