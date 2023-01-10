import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Startup from './components/Startup/Startup'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Login' element={<Startup/>}/>
    </Routes>

    </BrowserRouter>
    // <>
    // <Home/>
    // </>
  )
}

export default App