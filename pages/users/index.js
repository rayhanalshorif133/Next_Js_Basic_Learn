import React, { Suspense } from "react";
import User from '../../components/User';
import Loading from "@/components/Loading";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import Footer from "@/components/layouts/Footer";

export default function UserList({ users }) {

    const breadCrumb = [
        { name: 'User List', url: '/users' }
    ]



    return (
        <>
            <Breadcrumb breadCrumb={breadCrumb} />
            <div className="text-center mt-5 container mx-auto px-2">
                <h1 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 !mb-4 lg:!text-4xl">User List</h1>
                <div className="grid xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-0 sm:mt-3 items-center justify-center">
                    <Suspense fallback={<Loading />}>
                        {
                            users.map(user => {
                                return (<User key={user.id} user={user} />);
                            })
                        }
                    </Suspense>
                </div>
            </div>
            <Footer isFixed={false} />
        </>

    )
}


export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    return {
        props: {
            users: data.users
        }
    }
}
