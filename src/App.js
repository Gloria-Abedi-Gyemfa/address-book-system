import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login/register/Login'
import Signup from './components/Login/register/Signup'
import Startup from './components/Startup/Startup'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/startup' element={<Startup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>

    </BrowserRouter>
    // <>
    // <Home/>
    // </>
  )
}

export default App