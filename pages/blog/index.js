import Link from 'next/link'
import React from 'react'

export default function blog() {
    return (
        <>
            <h1>Blog Page</h1>
            <Link href="/blog">
                Blog
            </Link>
            <Link href="/">
                Home
            </Link>
        </>

    )
}
