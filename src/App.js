import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Edit from './components/Edit'
import Home from './components/Home'
import Login from './components/Login/register/Login'
import Signup from './components/Login/register/Signup'
import Startup from './components/Startup/Startup'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/startup' element={<Startup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/edit' element={<Edit/>}/>
    </Routes>

    </BrowserRouter>
    // <>
    // <Home/>
    // </>
  )
}

export default App