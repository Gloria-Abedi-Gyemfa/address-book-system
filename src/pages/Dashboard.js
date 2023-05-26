import React,{useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import styles from './pages.module.css'
import SideDrawer from '../components/sideDrawer/SideDrawer'
import {RiCloseFill} from 'react-icons/ri'

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <div className={styles.main}>
    <Navbar setShowDrawer={setShowDrawer} showDrawer={showDrawer}/>
    <section>
    <RiCloseFill className={styles.closeIcon} onClick={()=>setShowDrawer(!showDrawer)}/>
    {showDrawer && <SideDrawer setShowDrawer={setShowDrawer} showDrawer={showDrawer}/>}
    
    </section>
    
    </div>
  )
}

export default Dashboard