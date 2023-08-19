import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import InformedBar from '../components/navbar/InformedBar'
import {BsCameraFill} from 'react-icons/bs' 
import styles from './pages.module.css'
import UserFirstName from '../components/forms/UserFirstName'
import LastName from '../components/forms/LastName'
import Phone from '../components/forms/Phone'
import Button from '../components/buttons/Button'
import Gender from '../components/forms/Gender'

const UpdateUser = () => {
    const [gender, setGender] = useState('')
  return (
    <div>
        <Navbar/>
        <InformedBar text='Edit Account'/>
        <div className={styles.updateFormWrap}>
        <form className={styles.form}>
        <div className={styles.camera}><BsCameraFill className={styles.cam}/></div>
            <UserFirstName/>
            <LastName/>
            <Phone/>
            <Gender setGender={setGender} gender={gender}/>
            <div style={{marginTop:'1rem'}}>
            <Button text='Save' variant='primary' size='medium' />
            </div>
        </form>
        </div>
    </div>
  )
}

export default UpdateUser