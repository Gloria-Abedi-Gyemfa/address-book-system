import React, { createContext, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = () => {
    const [auth, setAuth] = useState(false)
  return (
    
    <AuthContext.Provider value={
        {}
    }/>
  )
}

