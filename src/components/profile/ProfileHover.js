import React from 'react'
import styles from './profile.module.css'
import UserImage from './UserImage'

const ProfileHover = ({username}) => {
  return (
    <div className={styles.hoverCard}>
        <UserImage/>
        <span >{username}</span>
        <p>Edit Profile</p>
        <p>Logout</p>
    </div>
  )
}

export default ProfileHover