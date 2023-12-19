import type { FC } from 'react';
import { getPosts_API } from '@/lib/postApis';
import PostCard from './PostCard';

const CardList: FC = async () => {

    const { posts } = await getPosts_API();

    return (
        <div className='prompt_layout'>
            {
                posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))
            }
        </div>      
    );
}

export default CardList;



// export const revalidate = 60;