import Breadcrumb from '@/components/layouts/Breadcrumb'
import React from 'react'
import { useRouter } from 'next/router';

export default function userDetails({ user }) {


    const breadCrumb = [
        { name: 'User List', url: '/users' },
        { name: 'User Details', url: '/users/1' }
    ]

    console.log(user);

    return (
        <>
            <Breadcrumb breadCrumb={breadCrumb} />
        </>
    )
}


export async function getServerSideProps(context) {

    const userId = context.params.userid;
    const res = await fetch('https://dummyjson.com/users/' + userId);
    const data = await res.json();
    return {
        props: {
            user: data
        }
    }
}
