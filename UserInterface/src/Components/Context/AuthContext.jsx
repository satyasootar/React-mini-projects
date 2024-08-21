import React from 'react'
import { createContext, useState } from 'react'


export const AuthContext = createContext();

export default function AuthContextProviderComponent({children}) {
    const[isLoggedIn, setIsLoggedIn] = useState()
    const logIn = () =>{
        setIsLoggedIn(true)
    }
    const logOut= () =>{
        setIsLoggedIn(false)
    }
    
  return (
    <AuthContext.Provider value={{isLoggedIn, logIn, logOut}} >
        {children}
    </AuthContext.Provider>
  )  
}
