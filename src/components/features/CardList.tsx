import type { FC } from 'react';
import type { DBPost } from '@/types/postTypes';
import Card from './Card';

type Props = {
    posts: DBPost[];
}

const CardList: FC<Props> = ({ posts }) => {

    console.log(posts);

    return (
        <div className='mt-16 prompt_layout'>
            {
                posts.map((post) => (
                    <Card key={post._id} post={post} />
                ))
            }
        </div>
    );
}

export default CardList;