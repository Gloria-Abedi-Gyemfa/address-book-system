import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/services/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />

        <Route path='dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
