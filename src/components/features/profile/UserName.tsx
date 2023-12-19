'use client';

import useSessionWithUserId from '@/hooks/auth/useSessionWithUserId';
import type { FC } from 'react';

const UserName: FC = () => {

    const { session } = useSessionWithUserId();

    return (
        <h1 className='text-left head_text'>
            <span className='blue_gradient'>
                {session?.user?.name}    
            </span> Profile
        </h1>
    );
}

export default UserName;