import React from 'react'

export default function Footer() {
    return (
        <div className='py-3'>
            <div className='text-center text-xl  mx-auto py-3'>
                All rights reserved &copy; {new Date().getFullYear()}
            </div>
        </div>
    )
}
