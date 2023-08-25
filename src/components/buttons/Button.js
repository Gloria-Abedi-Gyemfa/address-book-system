import React from 'react'
import styles from './button.module.css'
import {useNavigate} from 'react-router'
import Cookies from 'js-cookie'

const Button = ({ text, size, variant, page, setShowModal }) => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    if (text === 'Yes, Logout') {
      Cookies.remove('access_token') 
      navigate('/login')
    }
    if(text === 'No'){
      setShowModal(false)
    }
    if(text === 'Cancel'){
      window.history.back();
    }
  }

  return (
    <button
      className={`${styles[size]} ${styles[variant]}`}
      onClick={handleSubmit}
    >
      {text}
    </button>
  )
}

export default Button
