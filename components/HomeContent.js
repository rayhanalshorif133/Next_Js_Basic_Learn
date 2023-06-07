import React, { useState, useEffect, Suspense } from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Loading from '@/components/Loading';
import Image from 'next/image';

export default function HomeContent() {
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
            <div className="flex flex-row items-center justify-center">
                {
                    data.isLoading ? <Loading /> :
                        <>
                            {
                                data.contents.map((content) =>
                                (
                                    <Card className="mt-6 mx-2 w-72">
                                        <CardBody>
                                            <Image src={content.icon} width={48} height={48} />
                                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                                {content.title}
                                            </Typography>
                                            <Typography>
                                                {content.des}
                                            </Typography>
                                        </CardBody>
                                        <CardFooter className="pt-0">
                                            <a href={content.url} className="inline-block">
                                                <Button size="sm" variant="text" className="flex items-center gap-2">
                                                    Goto Page
                                                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                                </Button>
                                            </a>
                                        </CardFooter>
                                    </Card>
                                ))

                            }

                        </>
                }

            </div>
        </>
    )
}
