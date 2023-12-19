import { connectToDB } from '@/db/db';
import Post from '@/models/Post';
import { NextResponse, type NextRequest } from 'next/server';

type Props = {
    params: {
        _id: string;
    }
}

export async function GET(req: NextRequest, { params: { _id } }: Props) {

}

export async function PATCH(req: NextRequest, { params: { _id } }: Props) {

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
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}