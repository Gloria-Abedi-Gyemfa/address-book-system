import React,{useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import styles from './pages.module.css'
import SideDrawer from '../components/sideDrawer/SideDrawer'
import {RiCloseFill} from 'react-icons/ri'
import Profile from './Profile'

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <div className={styles.main}>
    <Navbar />
    <RiCloseFill className={styles.closeIcon} onClick={()=>setShowDrawer(!showDrawer)}/>
     <SideDrawer />
    <main>
    {/* <Profile/>  */}
    </main>
       
    </div>
  )
}

export default Dashboard