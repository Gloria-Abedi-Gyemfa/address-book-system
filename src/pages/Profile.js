import React from 'react'
import AuthLayout from '../components/services/authLayout'
import ProfileCard from '../components/profile/ProfileCard'

const Profile = () => {
  return (
    <>
      <AuthLayout>
        <ProfileCard/>
      </AuthLayout>
    </>
  )
}

export default Profile
