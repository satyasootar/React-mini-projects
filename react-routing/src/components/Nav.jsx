import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div className='Nav' >
        <div>
            <h1>React Routing</h1>
        </div>
        <div>
            <a href='/'>Home</a>
            <a href="/user">Users</a>
            <a href='/products'>Products</a>
            <a href='/help '>Help</a>
        </div>
    </div>
  )
}
