import React from 'react'
import { ThemeContext } from './Context/ThemeContext'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
export default function Nav() {

    const { theme } = useContext(ThemeContext)
    const { isLoggedIn , logIn , logOut } = useContext(AuthContext)



    return (
        <div style={{
            background: theme == "Dark"? "white": "black",
            color:theme =="Dark"? "black":"White",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }} >
            <h3>Is user Authenticated: {isLoggedIn?"Yes": "No" }</h3>

            <div>
                <button onClick={logIn} disabled={isLoggedIn} >Login</button>
                <button onClick={logOut} disabled={!isLoggedIn} >LogOut</button>
            </div>
        </div>
    )
}
