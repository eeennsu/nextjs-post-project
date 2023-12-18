import type { Metadata, NextPage } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Create Post',
    description: 'Create your post'
};

const CreatePostLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <section className='w-full max-w-full'>
            {children}
        </section>
    );
};

export default CreatePostLayout;