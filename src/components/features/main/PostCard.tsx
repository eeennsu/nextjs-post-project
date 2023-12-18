'use client';

import type { DBPost } from '@/types/postTypes';
import type { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import useSessionWithUserId from '@/hooks/auth/useSessionWithUserId';
import { useRouter, usePathname } from 'next/navigation';

type Props = {
    post: DBPost;
}

const PostCard: FC<Props> = ({ post }) => {



    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5'>
                <div>
                    {post.creator}
                </div>
            </div>
        </div>
    );
}

export default PostCard;