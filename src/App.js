import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import AddContact from './pages/AddContact'
import UpdateUser from './pages/UpdateUser'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/account_settings' element={<UpdateUser/>}/>
          <Route path="/add_contact" element={<AddContact />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
