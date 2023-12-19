import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'My Profile',
    description: 'my profile page.'
};

const ProfileLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <section>
            {children}
        </section>
    );
};

export default ProfileLayout;
