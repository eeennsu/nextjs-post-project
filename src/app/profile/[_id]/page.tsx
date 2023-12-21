import type { NextPage } from 'next';
import { getMyPosts_API } from '@/lib/postApis';
import { getAllUsers_API } from '@/lib/userApis';
import Profile from '@/components/features/main/Profile';
import { DBUser } from '@/types/apiTypes';

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



export const revalidate = 0;
// export const generateStaticParams = async () => {
//     const response = await getAllUsers_API();
//     const users = response.users as DBUser[];

//     if (!users) {
//         return [];
//     }

//     return users.map((user) => ({
//         _id: user._id
//     }));
// }