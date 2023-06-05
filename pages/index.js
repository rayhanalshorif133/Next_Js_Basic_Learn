import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";
import Header from './layouts/Header';
import { useRouter } from 'next/router';

export default function home() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  }

  return (
    <>
      <Header />
      <h1>This is home page</h1>

      {
        isLoggedIn ? <h1>Logged In</h1> : <Button color="blue" onClick={handleLogin}>Login</Button>
      }

    </>
  )
}
