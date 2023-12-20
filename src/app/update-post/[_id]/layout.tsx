import type { Metadata, NextPage } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Update Post',
    description: 'Update your post'
};

const UpdatePostLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <section className='w-full max-w-full'>
            {children}
        </section>
    );
};

export default UpdatePostLayout;