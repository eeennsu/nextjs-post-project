import type { FC } from 'react';

type Props = {
    type: PostType;
}

const FormHead: FC<Props>= ({ type }) => {
    
    return (
        <>
            <h1 className='flex text-left head_text'>
                <span className='mr-4 blue_gradient first-letter:uppercase'>{type}</span>Post
            </h1>
            <p className='max-w-md text-left desc'>
                {type} and share amazing prompts with the world, and let your imageination run wild with any AI-powered platform.
            </p>
        </>
    );
}

export default FormHead;