import type { FC } from 'react';
import SearchForm from './SearchForm';
import CardList from '../posts/CardList';
import { getAllPosts_API } from '@/lib/postApis';

const Feed: FC = async () => {

    const { allPosts } = await getAllPosts_API();

    return (
        <section className='feed'>         
            <SearchForm />
            <CardList posts={allPosts} />           
        </section>
    );
};

export default Feed;