import { connectToDB } from '@/db/db';
import { NextResponse, type NextRequest } from 'next/server';
import Post from '@/models/Post';

export async function GET(req: NextRequest) {
    try {
        await connectToDB();

        const posts = await Post.find();

        return NextResponse.json({ suc: true, posts }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ suc: false, error }, { status: 500 });
    }
}