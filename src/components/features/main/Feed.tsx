import type { FC } from 'react';
import SearchForm from './SearchForm';
import CardList from './CardList';

const Feed: FC = () => {

    return (
        <section className='feed'>
            <SearchForm />
            <CardList />
        </section>
    );
};

export default Feed;