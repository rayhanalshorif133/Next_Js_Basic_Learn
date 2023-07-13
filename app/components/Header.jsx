"use client"
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

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


    const pathName = usePathname();



    return (
        <div className='shadow-md w-full'>
            <nav className='flex justify-between items-center py-3 px-96'>
            <p className='text-2xl font-bold text-grey-800'>
                Basic Next.js App
            </p>
            <div className='flex'>
                {navItems.map((item, index) => (
                    <Link href={item.path} className={`p-2 m-3 text-base cursor-pointer ${pathName == item.path? "text-blue-500 font-semibold" : ""}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
        </div>
    )
}
