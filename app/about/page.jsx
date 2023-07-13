import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <h1 className='text-4xl'>About Page</h1>
        <p className='py-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <Link href='/'className='bg-blue-500 text-white px-4 py-3 rounded'>
          Home Page
      </Link>
    </div>
  )
}
