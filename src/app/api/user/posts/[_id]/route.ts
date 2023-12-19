import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { connectToDB } from '@/db/db';
import Post from '@/models/Post';
import User from '@/models/User';

type Props = {
    params: {
        _id: string;
    }
}

export async function GET(req: NextRequest, { params }: Props) {
    try {
        await connectToDB();
        
        const { _id } = params;
        const myPosts = await Post.find({ creator: _id }).populate({ path: 'creator', model: User });

        return NextResponse.json({ myPosts }, { status: 200 });

    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}