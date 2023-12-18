'use client';

import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

const SearchForm: FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return (
        <form className='relative w-full flex-center'>
            <input 
                placeholder='Search for a tag or a username'
                value={searchTerm}
                onChange={handleTermChange}
                required
                className='search_input peer'
            />            
        </form>
    );
}

export default SearchForm;