import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import SideDrawer from './SideDrawer'
import styles from './navbar.module.css'
import Cookies from 'js-cookie'

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Contact Book</div>
      <BiMenu
        onClick={() => setToggleDrawer(!toggleDrawer)}
        className={styles.menubar}
      />
      {toggleDrawer && <SideDrawer />}
      <div className={styles.profile}>
        <div className={styles.proImg}>
          <img src={<BsPersonFill />} />
        </div>
        <p>{ Cookies.get('first_name')}</p>
      </div>
    </div>
  )
}

export default Navbar
