import React from 'react'

export default function User({ user }) {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <hr />
        </div>
    )
}
