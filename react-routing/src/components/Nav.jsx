import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export default function Nav() {
  return (
    <div className='Nav' >
        <div>
            <h1>React Routing</h1>
        </div>
        <div>
            <Link to='/#'>Home</Link>
            <Link to="/user">Users</Link>
            <Link to='/products'>Products</Link>
            <Link to='/help '>Help</Link>
        </div>
    </div>
  ) 
}
