import React, { useState, useEffect } from 'react'
import Email from './Email'
import Name from './Name'
import Phone from './Phone'
import Address from './Address'
import State from './State'
import Button from '../buttons/Button'
import styles from './forms.module.css'
import person from '../../assets/person_avatar.png'
import {BsCameraFill} from 'react-icons/bs'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { newUser } from '../../features/authSlice'

const ContactForm = () => {
  const email = useSelector(state=>state.user.email)
  const name = useSelector(state=>state.user.name)
  const phone = useSelector(state=>state.user.phone)
  const address = useSelector(state=>state.user.address)
  const response = useSelector(state=>state.user.response)

  const [state, setState] = useState('')
  const [getImage, setGetImage] = useState(null)
  const [validateError, setValidateError] = useState({})

  const dispatch = useDispatch()

  const handleImageUpload = async (file)=>{
    try {
      let formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'obwnqchq')

      const response = await axios.post('https://api.cloudinary.com/v1_1/dleyquc6n/image/upload', formData,
      {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      });

      const imageUrl = response.data.secure_url
      localStorage.setItem('contact', imageUrl)
      setGetImage(imageUrl)
      
    } catch (error) {
      console.error(error)
    }
  };

  const handleImage= e=>{
    setGetImage(e.target.files[0])
    handleImageUpload(e.target.files[0])
  };

  const validateForm = () => {
    const newErrors = {}
    // Validate name
    if (name.trim() === '') {
      newErrors.firstName= 'First Name is required'
    }

    // Validate email
    if (email.trim() === '') {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'
    }

    // Validate phone number
    if(!/^(\d{3})[- ]?(\d{3})[- ]?(\d{3})$/.test(phone)){
      newErrors.phone = `Phone number must begin with the country's phone code followed by 9 digits`
    }
    
    setValidateError(newErrors)
    return Object.keys(newErrors).length === 0
  };

  const handleSubmit =  e => {
    e.preventDefault()
    if(validateForm()){
      dispatch(newUser({phone, name, email, address, state}))
    }
  };

  console.log(getImage);

  useEffect(() => {
    if(response){
      if (response.data) {
        console.log(response.data);
    }
      
    }

  }, [response]);

  return (
    <div className={styles.forms}>
      <input
        type='file'
        accept='image/*'
        id="photo-upload"
        onChange={handleImage}
        hidden/>
      <label htmlFor='photo-upload' className={styles.proImg}>
          <img src={getImage === null ?person: getImage}  className={styles.personAvatar}/>
          <BsCameraFill className={styles.camera} htmlFor='photo-upload'/>
      </label>
      <form onSubmit={handleSubmit} style={{marginBottom: '30px'}}>
        <Name  />
        <Phone />
        <Email />
        <Address  />
        <State state={state} setState={setState}/>
        <div className={styles.contactBtns}>
          <Button
            text="Save"
            variant="primary"
            size="medium"
            page="addContact"
          />
          <Button
            text="Cancel"
            variant="tertiary"
            size="medium"
            page="addContact"
          />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
