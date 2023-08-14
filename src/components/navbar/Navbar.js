import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import SideDrawer from './SideDrawer'
import styles from './navbar.module.css'
import Cookies from 'js-cookie'
import person from '../../assets/person_avatar.png'

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className={styles.navbar}>
      <BiMenu
        onClick={() => setToggleDrawer(!toggleDrawer)}
        className={styles.menubar}
      />
      <div className={styles.logo}>Contact Book</div>
      {toggleDrawer && <SideDrawer setToggleDrawer={setToggleDrawer}/>}
      <div className={styles.profile}>
      <p className={styles.userName}>{Cookies.get('first_name')}</p>
        <div className={styles.proImg}>
          <img src={person}  className={styles.personAvatar}/>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
