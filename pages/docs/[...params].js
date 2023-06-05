import { useRouter } from 'next/router'
import React from 'react'

export default function Nested() {

    const router = useRouter();

    const { params = [] } = router.query;

    console.log(params);

    if (params.length === 2) {
        return (
            <h1>
                Viewing docs for features {params[0]} and concept {params[1]}
            </h1>
        )
    }


    return (
        <div>
            <h1>
                Docs for features {params[0]}
            </h1>
        </div>
    )
}
