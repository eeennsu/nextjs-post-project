import type { FC } from 'react';
import { getPosts_API } from '@/lib/postApis';
import SearchForm from './SearchForm';
import CardList from './CardList';

const Feed: FC = async () => {

    const response = await getPosts_API();
    const posts = response.posts;

    return (
        <section className='feed'>
            <SearchForm />
            <CardList posts={posts} />
        </section>
    );
};

export default Feed;



export const revalidate = 60;