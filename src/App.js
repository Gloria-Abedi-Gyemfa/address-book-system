import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/services/ProtectedRoute'
import Unauthorized from './pages/Unauthorized'
import Login from './components/form/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginPage/>} /> */}
        <Route path='/' element={<Login/>}/>
        <Route path='dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="signup" element={<SignupPage />} />
        <Route path='401-page' element={<Unauthorized/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
