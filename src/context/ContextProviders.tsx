import type { FC, PropsWithChildren } from 'react';
import CardsProvider from './CardsProvider';
import PostProvider from './PostProvider';

const ContextProviders: FC<PropsWithChildren> = ({ children }) => {

    return (
        <CardsProvider>
            <PostProvider>
                {children}
            </PostProvider>
        </CardsProvider>
    );
}

export default ContextProviders;