import React from 'react'
import login from '../components/assets/2206_w023_n003_2519b_p1_2519.jpg'
import styles from './pages.module.css'
import SideDrawer from '../components/sideDrawer/SideDrawer'
import Navbar from '../components/navbar/Navbar'

const Unauthorized = () => {
  return (
    <>
    <Navbar/>
    <SideDrawer/>
    <div className={styles.UnauthorizedPage}>
    <img src={login} className={styles.UnauthorizedImg}/>
    <h2>Unauthorized</h2>
    <p className={styles.UnauthorizedText}>You need to login before </p>
    </div>
    </>
    
  )
}

export default Unauthorized