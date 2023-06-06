import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Header from './layouts/Header';
import { useRouter } from 'next/router';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function home() {
  const router = useRouter();
  const [data, setData] = useState({
    contents: [],
    isLoading: true
  });

  const fetchData = async () => {
    const url = `/api/home`;
    const res = await fetch(url);
    const contents = await res.json();
    contents.length > 0 ? setData({ contents, isLoading: false }) : setData({ contents, isLoading: true });
  }


  useEffect(() => {
    fetchData();
    console.log(data);
  }, [data.isLoading]);

  return (
    <>
      <Header />
      <div className="flex flex-row items-center justify-center">
        <Card className="mt-6 w-96">
          <CardBody>
            <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
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

