import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import SideDrawer from './SideDrawer'
import styles from './navbar.module.css'
import Cookies from 'js-cookie'
import person from '../../assets/person_avatar.png'
import Search from '../search/Search'

const Navbar = ({text}) => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

  const renderLogo = () => {
    if (!text || text.trim() === '') {
      return 'Contact Book';
    }
    return text;
  };

  return (
    <div className={styles.navbar}>
      {/*logo*/}
      <div className={styles.mainLogo}>Logo</div>

      <BiMenu
        onClick={() => setToggleDrawer(!toggleDrawer)}
        className={styles.menubar}
      />      
      {toggleDrawer && <SideDrawer setToggleDrawer={setToggleDrawer}/>}

      {/* page title */}
      <div className={styles.pageDecription}>{renderLogo()}</div>

      <ul className={styles.navbarList}>
        <li>Add Contacts</li>
        <li>Update Contacts</li>
        <li>All Contacts</li>
        <li>Delete Contacts</li>
      </ul>

        {/* search */}
      <div className={styles.search}><Search/></div>

      {/* profile image */}
      <div className={styles.profile}>
        <div className={styles.proImg}>
          <img src={person}  className={styles.personAvatar}/>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
