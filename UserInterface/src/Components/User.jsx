import React from 'react'


export default function User({ name, children }) {
    return (
        <div>
        <h1>User name is {name}</h1>
        <h2>{children}</h2>
        </div>
        
    )
}
 