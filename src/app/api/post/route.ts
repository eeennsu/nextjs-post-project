import { connectToDB } from '@/db/db';
import { NextResponse, type NextRequest } from 'next/server';
import Post from '@/models/Post';

export async function GET(req: NextRequest) {
    try {
        await connectToDB();

        const posts = await Post.find().populate('creator');      // creator에 있는 모델을 같이 불러옴

        return NextResponse.json({ posts }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}