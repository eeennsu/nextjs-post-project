'use client';

import type { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { useState, createContext, useContext } from 'react';

type CardsProviderType = {
    copyedId: string;
    setCopyedId: Dispatch<SetStateAction<string>>;
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}

const initValue: CardsProviderType = {
    copyedId: '',
    setCopyedId: () => {},
    searchTerm: '',
    setSearchTerm: () => {},
}

const CardsContext = createContext<CardsProviderType>(initValue);

const CardsProvider: FC<PropsWithChildren> = ({ children }) => {
    const [copyedId, setCopyedId] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <CardsContext.Provider 
            value={{ 
                copyedId, 
                setCopyedId, 
                searchTerm, 
                setSearchTerm 
            }}
        >
            {children}
        </CardsContext.Provider>
    )
}

export const useCardsContext = () => useContext(CardsContext);

export default CardsProvider;