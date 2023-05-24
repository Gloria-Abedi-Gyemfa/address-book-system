import React from 'react'
import styles from './profile.module.css'
import Card from '../card/Card'
import Cookies from 'js-cookie'
import avatar from '../assets/girl.png'

const Profile = () => {
  const username =  Cookies.get('name')

  return (
    <div className={styles.profile}>
        <img src={avatar} className={styles.userAvatar} style={{marginRight: '.5rem'}}/>
        <h2>{username}</h2>
        <div className={styles.profileHorizontalBar}></div>
    </div>
  )
}

export default Profile