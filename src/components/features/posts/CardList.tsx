'use client';

import type { FC } from 'react';
import { DBPost } from '@/types/postTypes';
import { usePostContext } from '@/context/PostProvider';
import { useRouter } from 'next/navigation';
import { useCardsContext } from '@/context/CardsProvider';
import PostCard from './PostCard';
import NotSearchedResults from '../main/NotSearchedResults';

type Props = {
    posts: DBPost[];
}

const CardList: FC<Props> = ({ posts }) => {

    const { postResults, setPostResults, setSearchType } = usePostContext();
    const { setSearchTerm } = useCardsContext();
    const router = useRouter();

    const handleBack = () => {
        setPostResults(null);
        setSearchTerm('');
        setSearchType('tag');
        router.refresh();    
    }

    return (
        <>
            <div className='mt-6 sm:mt-10'>
                {
                    postResults && (
                        <button className='back_btn' onClick={handleBack}>
                            Back
                        </button>
                    )
                }
            </div>
            <div className='prompt_layout'>         
                {
                    postResults && postResults.length >= 1 ? (
                        postResults?.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))
                    ) : postResults?.length === 0 ? (
                        <NotSearchedResults />
                    ) : (
                        posts.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))
                    )
                }            
            </div>   
        </>   
    );
}

export default CardList;



// export const revalidate = 60;