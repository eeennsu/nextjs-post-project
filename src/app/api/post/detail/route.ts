import { connectToDB } from '@/db/db';
import { NextRequest, NextResponse } from 'next/server';
import PostModel from '@/models/Post';

export async function POST(req: NextRequest) {
    const { userId: creator, prompt, tags } = await req.json();

    try {
        await connectToDB();                    // api를 호출해야할 때마다 매번 작성해줘야 한다. next js는 이러한 연결이 없으면 연결을 끊기 때문
  
        const newPost = new PostModel({
            creator,
            prompt,
            tags
        });

        await newPost.save();

        return NextResponse.json({ suc: true, newPost }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ suc: false, msg: 'Failed to create a new prompt', error }, { status: 500 });
    }
}
