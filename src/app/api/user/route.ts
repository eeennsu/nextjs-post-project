import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import User from '@/models/User';

export async function GET(req: NextRequest) {
    try {
        
        const users = await User.find({});

        if (!users) {
            return NextResponse.json({ suc: false, msg: 'Not founded users.' }, { status: 500 });
        }
    
        return NextResponse.json({ users }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}