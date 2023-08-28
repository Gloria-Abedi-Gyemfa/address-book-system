import React, { useState } from 'react'
import {BsCalendarEvent, BsTelephone} from 'react-icons/bs'
import styles from './navbar.module.css'
import {useNavigate} from 'react-router'
import person from '../../assets/person_avatar.png'

const UserSidebar = () => {

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    const [currentDate, setCurrentDate] = useState(getDate());
    const navigate = useNavigate()


  return (
    <div className={styles.sidebar}>
            <div className={styles.profile}>
              <img src={person}  className={styles.personAvatar}/>
              <p>{sessionStorage.getItem('firstName')}{' '}{sessionStorage.getItem('lastName')}</p>
              <p>{sessionStorage.getItem('email')}</p>
            </div>
            <div className={styles.date}><BsCalendarEvent/><p>{currentDate}</p></div>

            <div className={styles.phone}><BsTelephone/> <p>02334567891</p></div>
          
        </div>
  )
}

export default UserSidebar 