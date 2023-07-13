import React from 'react'

export default function Header() {

    const navItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'FAQ',
            path: '/about/faq'
        }
    ];


    return (
        <div className='shadow-md w-full'>
            <nav className='flex justify-between items-center py-3 px-96'>
            <p className='text-2xl font-bold text-grey-800'>
                Basic Next.js App
            </p>
            <div className='flex'>
                {navItems.map((item, index) => (
                    <div className='p-2 m-3 text-base cursor-pointer'>
                        {item.name}
                    </div>
                ))}
            </div>
        </nav>
        </div>
    )
}
