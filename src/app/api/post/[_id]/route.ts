import type { NextRequest } from 'next/server';
import type { DBPost } from '@/types/postTypes';
import { NextResponse } from 'next/server';
import connectToDB from '@/db/db';
import Post from '@/models/Post';

type Props = {
    params: {
        _id: string;
    }
}

export async function GET(req: NextRequest, { params: { _id } }: Props) {
    try {
        await connectToDB();

        const post = await Post.findById(_id);

        if (!post) {
            return NextResponse.json({ suc: false, msg: 'Failed find post.' }, { status: 500 });
        }

        return NextResponse.json({ suc: true, post }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest, { params: { _id } }: Props) {
    const { prompt, tags } = await req.json();

    try {
        await connectToDB();
    
        const updateContent: Partial<DBPost> = {
            prompt,
            tags
        };

        const updatedPost = await Post.findByIdAndUpdate(_id, updateContent, { new: true });

        if (!updatedPost) {
            return NextResponse.json({ suc: false, msg: 'Failed update post.' }, { status: 500 });
        }

        return NextResponse.json({ suc: true, msg: 'Successfully update post.' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params: { _id } }: Props) {
    try {
        await connectToDB();
  
        const result = await Post.findByIdAndDelete(_id);

        console.log('result', result);

        if (!result) {
            return NextResponse.json({ suc: false, msg: 'Failed delete post.' }, { status: 500 });
        }

        return NextResponse.json({ suc: true }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}