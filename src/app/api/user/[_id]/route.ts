import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import User from '@/models/User';

type Props = {
    params: {
        _id: string;
    }
}

export async function GET(req: NextRequest, { params: { _id } }: Props) {
    try {
        const user = await User.findById(_id);

        if (!user) {
            return NextResponse.json({ msg: 'Not founded user.' }, { status: 500 });
        }
  
        return NextResponse.json({ user }, { status: 200 });

    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}