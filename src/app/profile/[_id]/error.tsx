'use client';

import type { FC } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

type Props = {
    error: Error;
    reset: () => void;
}

const ProfileError: FC<Props> = ({ error, reset }) => {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className='flex flex-col items-center mt-10'>
            <h2 className='text-5xl font-bold'>Something went to wrong!</h2>
            <p className='text-gray-700 mt-10'>
                {error.message}
            </p>
            <div className='mt-16'>
                <button className=' bg-orange-500 text-white px-4 py-3 rounded-xl shadow-sm ' onClick={() => reset()}>
                    Try again!
                </button>
            </div>           
        </div>
    );
}

export default ProfileError;