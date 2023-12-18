import type { Metadata, NextPage } from 'next';
import { PropsWithChildren } from 'react';

type Props = {
    params: {
        username: string;
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

    return {
        title: `${params.username}'s Profile Page`,
        description: `this is ${params.username}'s profile Page`
    }
}

const ProfileLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <section>
            {children}
        </section>
    );
};

export default ProfileLayout;
