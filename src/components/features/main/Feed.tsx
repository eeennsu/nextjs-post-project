import type { FC } from 'react';
import SearchForm from './SearchForm';
import CardList from '../posts/CardList';
import CardsProvider from '@/context/CardsProvider';

const Feed: FC = () => {

    return (
        <section className='feed'>
            <CardsProvider>
                <SearchForm />
                <CardList />
            </CardsProvider>            
        </section>
    );
};

export default Feed;