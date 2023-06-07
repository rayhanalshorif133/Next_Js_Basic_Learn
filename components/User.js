import React from 'react'
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function User({ user }) {

    const { firstName, lastName, image } = user;

    const showDetails = (id) => {
        window.location.href = `/users/${id}`;
    }

    return (
        <div onClick={() => showDetails(user.id)} className="border-t cursor-pointer hover:scale-105 flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
            <img src={image} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
            <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-2 space-y-1">
                    <h2 className="xl:text-[1rem] lg:text-[1rem] font-semibold sm:text-2xl">{firstName} {lastName}</h2>
                    <p className="px-5 text-[13px] sm:text-base dark:text-gray-400">{user.email}</p>
                    <p className="px-5 text-[11px] sm:text-base dark:text-gray-400">{user.gender}</p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                    <a rel="noopener noreferrer" href={'tel:' + user.phone} aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                        <FaPhone className="w-4 h-4 fill-current" />
                    </a>
                    <a rel="noopener noreferrer" href={'mailto:' + user.email} aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                        <FaEnvelope className="w-4 h-4 fill-current" />
                    </a>
                </div>
            </div>
        </div>
    )
}
