import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className='home-page'>
      <div className='navigation-bars'>
        <Navbar/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Home