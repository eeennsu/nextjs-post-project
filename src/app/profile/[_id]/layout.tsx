import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';
import { getOneUser_API } from '@/lib/userApis';

type Props = {
    params: {
        _id: string;
    }
};

const ProfileLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <section>
            {children}
        </section>
    );
};

export default ProfileLayout;



export const generateMetadata = async ({ params: { _id } }: Props): Promise<Metadata> => {

    const { user } = await getOneUser_API(_id);

    if (!user) {
        return {
            title: 'User not found'
        };
    }
   
    return {
        title: `${user.name}'s profile page.`,
        description: `this is ${user.name}'s profile page.`,
    };
}