import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'

import './Nav.css'

export default function Nav() {

 let {isLoggedIn ,logIn , logOut } = useContext(AuthContext)
  return (
    <div className='Nav' >
      <div>
        <h1>React Routing</h1>
      </div>
      <div>
        <button><NavLink to='/#' style={({ isActive }) => ({ color: isActive ? "blue" : "White" })} >Home</NavLink></button> &nbsp; &nbsp; &nbsp; &nbsp;
        <button> <NavLink to="/user" style={({ isActive }) => ({ color: isActive ? "blue" : "White" })} >Users</NavLink></button>&nbsp; &nbsp; &nbsp; &nbsp;
        <button>  <NavLink to='/products' style={({ isActive }) => ({ color: isActive ? "blue" : "White" })} >Products</NavLink></button>&nbsp; &nbsp; &nbsp; &nbsp;
        <button><NavLink to='/help ' style={({ isActive }) => ({ color: isActive ? "blue" : "White" })} >Help</NavLink></button>&nbsp; &nbsp; &nbsp; &nbsp;
      </div>
      <div>
        <button className='btn' onClick={logIn} disabled={isLoggedIn} >Log in</button> &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn' onClick={logOut} disabled={!isLoggedIn} >Log out</button>
      </div> 
    </div>
  )
}
