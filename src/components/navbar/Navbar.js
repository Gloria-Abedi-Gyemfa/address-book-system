import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import SideDrawer from './SideDrawer'
import styles from './navbar.module.css'

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className={styles.navbar}>
      <BiMenu
        onClick={() => setToggleDrawer(!toggleDrawer)}
        className={styles.menubar}
      />
      {toggleDrawer && <SideDrawer />}
      <div className="profile">
        <div className='proImg'>
          <img src={<BsPersonFill />} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
