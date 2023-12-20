import type { FC } from 'react';
import SearchForm from './SearchForm';
import CardList from '../posts/CardList';

const Feed: FC = () => {

    return (
        <section className='feed'>         
            <SearchForm />
            <CardList />           
        </section>
    );
};

export default Feed;