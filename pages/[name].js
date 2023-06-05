'use client';

import { usePathname } from 'next/navigation';


export default function NotFound() {

    const pathname = usePathname();

    return (
        <div>
            <h1>404 - Page Not Found <br /> {pathname}</h1>
        </div>
    )
}
