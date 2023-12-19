import { connectToDB } from '@/db/db';
import { NextResponse, type NextRequest } from 'next/server';
import Post from '@/models/Post';
import User from '@/models/User';

export async function GET(req: NextRequest) {
    try {
        await connectToDB();

        const allPosts = await Post.find().populate({ path: 'creator', model: User });     
        // creator에 있는 모델을 같이 불러옴, 이렇게 객체 형식으로 해주어야 next js가 인식할 수 있음.                      

        return NextResponse.json({ allPosts }, { status: 200 });
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}