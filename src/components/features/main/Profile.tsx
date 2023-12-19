import type { FC } from 'react';
import type { DBPost } from '@/types/postTypes';
import UserName from '../profile/UserName';
import MyPosts from '../profile/MyPosts';

type Props = {
    myPosts: DBPost[];
}

const Profile: FC<Props> = ({ myPosts }) => {

    return (
        <section className='w-full'>
            <UserName />
            <p className='text-left desc'>
                Welcome to your Personalized profile page
            </p>
            <MyPosts myPosts={myPosts} />
        </section>
    );
}

export default Profile;