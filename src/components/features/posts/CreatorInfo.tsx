import { Creator } from '@/types/postTypes';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
    creator: Creator;
}

const CreatorInfo: FC<Props> = ({ creator }) => {

    return (
        <div className='flex items-center justify-start flex-1 gap-3 cursor-pointer'>
            <Image 
                src={creator.image || '/assets/images/logo.svg'}
                alt='user icon'
                width={40}
                height={40}
                className='object-contain rounded-full'
            />
            <div className='flex flex-col'>
                <h3 className='font-semibold text-gray-900 font-satoshi'>
                    {creator.name}
                </h3>
                <p className='text-sm text-gray-500 font-inter'>
                    {creator.email}
                </p>
            </div>
        </div>
    );
}

export default CreatorInfo;