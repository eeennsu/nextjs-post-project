import type { NextPage } from 'next';
import { getMyPosts_API } from '@/lib/postApis';
import { getAllUsers_API } from '@/lib/userApis';
import Profile from '@/components/features/main/Profile';

type Props = {
    params: {
        _id: string;
    }
}

const ProfilePage: NextPage<Props> = async ({ params: { _id } }) => {

    if (!_id) {
        throw new Error('Not found session value.');
    }

    const { myPosts } = await getMyPosts_API(_id);

    return (
        <Profile myPosts={myPosts} />
    );
};

export default ProfilePage;



export const generateStaticParams = async () => {
    const { users } = await getAllUsers_API();

    if (!users) {
        return [];
    }

    return users.map((user) => ({
        _id: user._id
    }));
}

export const revalidate = 10;