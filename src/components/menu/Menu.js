import React from 'react'
import styles from './menu.module.css'
import logo from '../assets/id-card.png'
import assetStyle from '../assets/assets.module.css'

const Menu = () => {
  return (
    <>
    <div className={styles.showDrawer} >
    <img src={logo} className={assetStyle.logo }/>
    <p className={styles.logo}>FindMe</p>
    </div>
    </>
  )
}

export default Menu