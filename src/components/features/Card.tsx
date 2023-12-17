import { DBPost } from '@/types/postTypes';
import type { FC } from 'react';

type Props = {
    post: DBPost;
}

const Card: FC<Props> = ({ post }) => {

    return (
        <div>
            <h2>{post.prompt}</h2>
            <p>{post.tags}</p>
        </div>
    );
}

export default Card;