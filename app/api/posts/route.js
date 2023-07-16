// Url: http://localhost:3000/api/posts

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        const body = await request.json();
        const { title } = body;

        // invocation of prisma client
        const newPost = await prisma.post.create({
            data: {
                title
            }
        });

        return NextResponse.json({
            error: false,
            message: "Post created successfully",
            data: newPost
        }, {
            status: 201
        });



    } catch (error) {
        return NextResponse.json({
            error: true,
            message: error.message
        }, {
            status: 500
        });
    }
}