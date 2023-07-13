import Link from 'next/link'
import React from 'react'

export default function homePage() {
  return (
    <div>
      <h1 className='text-4xl'>Home Page</h1>
      <p className='py-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>

      <Link href='/about'className='bg-blue-500 text-white px-4 py-3 rounded'>
          About Page
      </Link>
    </div>
  )
}
