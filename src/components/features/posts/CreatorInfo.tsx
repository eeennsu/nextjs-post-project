import type { FC } from 'react';
import type { Creator, DBPost } from '@/types/postTypes';
import { useMemo } from 'react';
import { getTimeFormat } from '@/utils/time';
import Image from 'next/image';

type Props = {
    creator: Creator;
    createdAt: DBPost['createdAt'];
    updatedAt: DBPost['updatedAt'];
}

const CreatorInfo: FC<Props> = ({ creator: { email, image, name }, createdAt, updatedAt }) => {

    const date = useMemo(() => {
        if (createdAt === updatedAt) {
            return getTimeFormat(createdAt);
        } else {
            return getTimeFormat(updatedAt);
        }
    }, [createdAt, updatedAt]);

    return (
        <div className='flex items-center flex-1 gap-3 min-w-[180px]'>
            <Image 
                src={image || '/assets/images/logo.svg'}
                alt='user icon'
                width={40}
                height={40}
                className='object-contain rounded-full'
            />
            <div className='flex flex-col'>
                <h3 className='font-semibold text-gray-900 font-satoshi'>
                    {name}
                </h3>
                <p className='text-sm text-gray-500 font-inter'>          
                    {date}
                </p>
            </div>
        </div>
    );
}

export default CreatorInfo;