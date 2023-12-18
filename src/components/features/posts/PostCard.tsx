'use client';

import type { DBPost } from '@/types/postTypes';
import type { FC } from 'react';
import { useCardsContext } from '@/context/CardsProvider';
import Image from 'next/image';
import Tag from './Tag';
import Prompt from './Prompt';
import CreatorInfo from './CreatorInfo';

type Props = {
    post: DBPost;
}

const PostCard: FC<Props> = ({ post: { creator, prompt, tags } }) => {

    const { 
        copyedPrompt, setCopyedPrompt, 
        searchTagTerm, setSearchTagTerm
     } = useCardsContext();

    const isCopyed = copyedPrompt === prompt;

    const handleCopyPrompt = () => {
        setCopyedPrompt(prompt);
        navigator.clipboard.writeText(prompt);
        setTimeout(() => setCopyedPrompt(''), 3000);
    }

    return (
        <div className='prompt_card'>
            <div className='flex items-start justify-between gap-5 pb-4 border-b-2 border-b-gray-300/90'>
                <CreatorInfo creator={creator} />
                <div className={`copy_btn ${isCopyed && 'scale-150'}`} onClick={handleCopyPrompt}>
                    <Image 
                        src={
                            isCopyed
                                ? '/assets/icons/tick.svg'
                                : '/assets/icons/copy.svg'
                        }
                        alt='copy btn'
                        width={16}
                        height={16}
                        className='object-contain'
                    />
                </div>
            </div>
            <Prompt>
                {prompt}
            </Prompt>
            <p className='flex text-sm cursor-pointer gap-x-2 font-inter '>
                {
                    tags.map((tag) => (
                        <Tag key={tag}>
                            {tag}
                        </Tag>
                    ))
                }
            </p>
        </div>
    );
}

export default PostCard;