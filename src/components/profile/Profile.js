import React,{ useState } from 'react'
import styles from './profile.module.css'
import Cookies from 'js-cookie'
import ProfileHover from './ProfileHover'
import UserImage from './UserImage'

const Profile = () => {
  const username =  Cookies.get('name')
  const [hoverProfile, setHoverProfile] = useState(false)

  return (
    <div className={styles.profile}>
        <div onClick={()=>setHoverProfile(!hoverProfile)}>
          <UserImage/>
        <h4>{username}</h4>
        </div>
        {hoverProfile ? <ProfileHover username={username}/>: undefined}
    </div>
  )
}

export default Profile