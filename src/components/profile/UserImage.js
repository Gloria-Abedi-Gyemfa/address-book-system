import React from 'react'
import styles from './profile.module.css'
import avatar from '../assets/girl.png'

const UserImage = () => {
  return (
    <img src={avatar} className={styles.userAvatar} style={{marginRight: '.5rem'}}/>
  )
}

export default UserImage