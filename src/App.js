import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
