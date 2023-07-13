// url : http://localhost:3000/api/posts
import prisma from '@/app/libs/prismaDb.js';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request) {
    return NextResponse.json({
        'httpMethod': 'GET',
    })
}


export async function POST(request) {
    try {
        const body = await request.json();
        const { title, desc } = body;
        const result = await prisma.Post.create({
            data: {
                title: title,
                desc: desc,
            },
        });
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            error: error.message || error.toString(),
        });
    }
}

export async function PUT(request) { }

export async function DELETE(request) { }

export async function PATCH(request) { }