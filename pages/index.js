import React, { Suspense } from 'react'
import HomeContent from '@/components/HomeContent';
import Loading from '@/components/Loading';
import Breadcrumb from '@/components/layouts/Breadcrumb';
export default function home() {

  const breadCrumb = [
    { name: 'User List', url: '/users' }
  ]

  return (
    <>
      <Breadcrumb breadCrumb={breadCrumb} />
      <Suspense fallback={<Loading />}>
        <HomeContent />
      </Suspense>
    </>
  )
}


export async function getServerSideProps(context) {

  const baseUrl = context.req.headers.host;
  const url = `http://${baseUrl}/api/home`;
  var isLoading = true;

  const res = await fetch(url);
  const contents = await res.json();
  contents.length > 0 ? isLoading = false : isLoading = true;

  return {
    props: {
      contents,
      isLoading
    },
  }
}

