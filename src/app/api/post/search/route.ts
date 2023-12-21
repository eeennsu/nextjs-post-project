import type { NextRequest } from 'next/server';
import type { DBPost } from '@/types/postTypes';
import { connectToDB } from '@/db/db';
import { NextResponse } from 'next/server';
import Post from '@/models/Post';
import User from '@/models/User';

export async function GET(req: NextRequest) {

    const type = req.nextUrl.searchParams.get('type');
    const term = req.nextUrl.searchParams.get('term');

    if (!type || !term) {
        return NextResponse.json({ error: 'not found type and term value.' }, { status: 404 });
    }

    try {
        await connectToDB();

        let results;

        if (type === 'creator') {
            const populatedResults: Required<DBPost>[] = await Post.find({}).populate({
                path: 'creator',
                model: User,
            });

            results = populatedResults.filter(({ creator }) => creator && creator.name!.includes(term));

        } else if (type === 'prompt') {
            const regex = new RegExp(term);
            results = await Post.find({ prompt: { $regex: regex, $options: 'i' } }).populate({ path: 'creator', model: User });
            
        } else if (type === 'tag') {
            results = await Post.find({ tags: { $in: [term] } }).populate({ path: 'creator', model: User });
        }
   ;
        return NextResponse.json({ results }, { status: 200 });
    
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}