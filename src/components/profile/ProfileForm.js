import React from 'react'
import TextInput from '../forms/input/TextInput'

const ProfileForm = () => {
  return (
    <form>
        <TextInput label='First Name'/>
        <TextInput label='Last Name'/>
        <TextInput label='Gender'/>
        <TextInput label='Mobile Number'/>
        <TextInput label='Picture'/>
    </form>
  )
}

export default ProfileForm