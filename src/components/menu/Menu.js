import React from 'react'
import styles from './menu.module.css'
import logo from '../assets/id-card.png'
import assetStyle from '../assets/assets.module.css'

const Menu = ({setShowDrawer, showDrawer}) => {
  return (
    <>
    <div onClick={()=>setShowDrawer(true)} className={showDrawer ? styles.menuInvisible : undefined }>
    <img src={logo} className={assetStyle.logo }/>
    <p className={styles.logo}>FindMe</p>
    </div>
    </>
  )
}

export default Menu