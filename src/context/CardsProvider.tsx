'use client';

import type { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { useState, createContext, useContext } from 'react';

type CardsProviderType = {
    copyedId: string;
    setCopyedId: Dispatch<SetStateAction<string>>;
    searchTagTerm: string;
    setSearchTagTerm: Dispatch<SetStateAction<string>>;
}

const initValue: CardsProviderType = {
    copyedId: '',
    setCopyedId: () => {},
    searchTagTerm: '',
    setSearchTagTerm: () => {},
}

const CardsContext = createContext<CardsProviderType>(initValue);

const CardsProvider: FC<PropsWithChildren> = ({ children }) => {
    const [copyedId, setCopyedId] = useState<string>('');
    const [searchTagTerm, setSearchTagTerm] = useState<string>('');

    return (
        <CardsContext.Provider 
            value={{ 
                copyedId, 
                setCopyedId, 
                searchTagTerm, 
                setSearchTagTerm 
            }}
        >
            {children}
        </CardsContext.Provider>
    )
}

export const useCardsContext = () => useContext(CardsContext);

export default CardsProvider;