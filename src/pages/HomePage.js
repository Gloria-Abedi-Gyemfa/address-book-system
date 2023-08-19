import React from 'react'
import { useEffect } from 'react'
import ContactCard from '../components/cards/ContactCard'
import Navbar from '../components/navbar/Navbar'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!Cookies.get('access_token')) {
      navigate('/login')
    }
  }, [])
  
  return (
      <div>
          <Navbar/>
        <ContactCard/>
    </div>
  )
}

export default HomePage