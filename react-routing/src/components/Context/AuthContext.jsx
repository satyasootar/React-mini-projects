import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';


export const AuthContext = createContext();

export default function AuthContextProviderComponent({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const logIn = () => {
    setIsLoggedIn(true);
    toast.success('Successfully logged in', {
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: true,
      pauseOnHover: true,
      theme: "light",
    })
  }

  const logOut = () => {
    setIsLoggedIn(false);
    toast.info('Successfully logged out', {
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: true,
      pauseOnHover: true,
      theme: "light",
    })
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
