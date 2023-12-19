import type { FC } from 'react';
import { getAllPosts_API } from '@/lib/postApis';
import PostCard from './PostCard';

const CardList: FC = async () => {

    const { allPosts } = await getAllPosts_API();

    return (
        <div className='prompt_layout'>
            {
                allPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))
            }
        </div>      
    );
}

export default CardList;



// export const revalidate = 60;