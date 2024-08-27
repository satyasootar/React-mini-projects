import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
import { Navigate } from 'react-router-dom'


export default function PrivateComp({children}) {
let {isLoggedIn , login , logout} = useContext(AuthContext)

if(!isLoggedIn){
    return <Navigate to="/#" />
}
return children
}
