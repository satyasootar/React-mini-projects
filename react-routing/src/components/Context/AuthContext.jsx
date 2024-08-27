import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export default function AuthContextProviderComponent({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const logIn = () => {
    setIsLoggedIn(true);
    toast('Logged in', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: "Bounce",
      });
    console.log("User logged in");
    console.log("isLoggedIn: ", isLoggedIn);
  }

  const logOut = () => {
    setIsLoggedIn(false);
    
    console.log("User logged out");
    console.log("isLoggedIn: ", isLoggedIn);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
