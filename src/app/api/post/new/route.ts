import { connectToDB } from '@/db/db';
import { NextRequest, NextResponse } from 'next/server';
import Post from '@/models/Post';

export async function POST(req: NextRequest) {
    const { _id: creator, prompt, tags } = await req.json();

    try {
        await connectToDB();                    // api를 호출해야할 때마다 매번 작성해줘야 한다. next js는 이러한 연결이 없으면 연결을 끊기 때문
  
        const newPost = new Post({
            creator,
            prompt,
            tags
        });
        
        await newPost.save();

        return NextResponse.json({ newPost }, { status: 201 });
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}