'use client';

import type { FC } from 'react';
import type { DBPost } from '@/types/postTypes';
import { useCardsContext } from '@/context/CardsProvider';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Tag from './Tag';
import Prompt from './Prompt';
import CreatorInfo from './CreatorInfo';
import useSessionWithUserId from '@/hooks/auth/useSessionWithUserId';
import Spinner from '@/components/commons/Spinner';

type Props = {
    post: DBPost;
    handleEdit?: () => void;
    handleDelete?: () => void;
    isDeleting?: boolean;
}

const PostCard: FC<Props> = ({ post: { _id, creator, prompt, tags, createdAt, updatedAt }, handleEdit, handleDelete, isDeleting }) => {

    const isProfilePage = usePathname().startsWith('/profile');
    const { session } = useSessionWithUserId();
    const { copyedId, setCopyedId, setSearchTerm } = useCardsContext();
    const [isCopyed, setIsCopyed] = useState<boolean>(false);

    const isControllable = session?.user?._id === creator._id && isProfilePage;

    const handleCopyPrompt = () => {     
        console.log('_id', _id);
        setCopyedId(_id);
        navigator.clipboard.writeText(prompt);
    }

    useEffect(() => {
        if (_id === copyedId) setIsCopyed(true);  
        else if (_id !== copyedId) setIsCopyed(false);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [copyedId]);

    const setSearchTag = (tag: string) => {
        if (isProfilePage) {
            return;
        }
        
        setSearchTerm(tag);
    }

    return (
        <div className='prompt_card'>
            <div className='flex items-start justify-between gap-5 pb-4 border-b-2 border-b-gray-300/90'>
                <CreatorInfo creator={creator} createdAt={createdAt} updatedAt={updatedAt} />
                <div className={`copy_btn ${isCopyed && 'scale-125'}`} onClick={handleCopyPrompt}>
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
            <p className='flex overflow-x-auto text-sm cursor-pointer gap-x-2 font-inter create_date'>
                {
                    tags.map((tag) => (
                        <Tag key={tag} onClick={() => setSearchTag(tag)}>
                            {tag}
                        </Tag>
                    ))
                }
            </p>
            {
                isControllable && (
                    <div className='gap-4 pt-3 mt-5 border-t border-gray-100 flex-center'>
                        <button className='h-8 text-sm transition rounded-md shadow-md cursor-pointer w-14 font-inter green_gradient hover:shadow-xl flex-center' onClick={handleEdit}>
                            Edit
                        </button>
                        <button className='h-8 text-sm transition rounded-md shadow-md cursor-pointer w-14 font-inter orange_gradient hover:shadow-xl flex-center' onClick={handleDelete} disabled={isDeleting}>
                            {
                                isDeleting ? (
                                    <Spinner />
                                ) : (
                                    'Delete'
                                )
                            }
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default PostCard;