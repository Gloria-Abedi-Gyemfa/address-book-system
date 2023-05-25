import React from 'react'
import Navbar from '../components/navbar/Navbar'
import styles from './pages.module.css'
import SideDrawer from '../components/sideDrawer/SideDrawer'

const Dashboard = () => {
  return (
    <div className={styles.main}>
    <Navbar/>
    <SideDrawer/>
    </div>
  )
}

export default Dashboard