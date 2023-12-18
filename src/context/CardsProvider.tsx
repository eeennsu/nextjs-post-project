'use client';

import type { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { useState, createContext, useContext } from 'react';

type CardsProviderType = {
    copyedPrompt: string;
    setCopyedPrompt: Dispatch<SetStateAction<string>>;
    searchTagTerm: string;
    setSearchTagTerm: Dispatch<SetStateAction<string>>;
}

const initValue: CardsProviderType = {
    copyedPrompt: '',
    setCopyedPrompt: () => {},
    searchTagTerm: '',
    setSearchTagTerm: () => {},
}

const CardsContext = createContext<CardsProviderType>(initValue);

const CardsProvider: FC<PropsWithChildren> = ({ children }) => {
    const [copyedPrompt, setCopyedPrompt] = useState<string>('');
    const [searchTagTerm, setSearchTagTerm] = useState<string>('');

    return (
        <CardsContext.Provider 
            value={{ 
                copyedPrompt, 
                setCopyedPrompt, 
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