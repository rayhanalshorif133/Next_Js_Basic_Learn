import { useRouter } from 'next/router'
import React from 'react'

export default function index() {

    const router = useRouter();


    const { bookId, userId } = router.query;

    return (
        <div>
            <h1>This Book ID is {bookId} and review by userID {userId}</h1>
        </div>
    )
}
