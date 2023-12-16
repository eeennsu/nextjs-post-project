import type { Metadata, NextPage } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Create Post',
    description: 'Create your post'
}

const CreatePostLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <main className='w-full max-w-full'>
            {children}
        </main>
    );
};

export default CreatePostLayout;