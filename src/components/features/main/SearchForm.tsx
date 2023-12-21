'use client';

import type { FC, ChangeEvent, FormEvent } from 'react';
import { useCardsContext } from '@/context/CardsProvider';
import { toast } from 'react-toastify';
import { searchPosts_API } from '@/lib/postApis';
import { type SearchSelect, usePostContext } from '@/context/PostProvider';
import { FcSearch } from "react-icons/fc";

const SearchForm: FC = () => {

    const { searchTerm, setSearchTerm } = useCardsContext();
    const { searchType, setSearchType, setPostResults } = usePostContext();

    const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchType(e.target.value as SearchSelect);
    }

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        handleSearch();
    };

    const handleSearch = async () => {
        if (searchTerm.length <= 0) {
            toast.info('Please input search term...');

            return;
        }        
        
        else if (searchTerm.length <= 1) {
            toast.info('Please input least 2 charaters...');

            return;
        }

        const { results } = await searchPosts_API(searchType, searchTerm);
        
        setPostResults(results);
    }

    return (
        <form className='relative w-full gap-2 flex-center' onSubmit={handleSearchSubmit}>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-lg' onChange={handleTypeChange} value={searchType}>
                <option value={'tag'}>Tag</option>
                <option value={'prompt'}>Prompt</option>
                <option value={'creator'}>Creator</option>
            </select>
            <input 
                placeholder='Search for a tag or a username'
                value={searchTerm}
                onChange={handleTermChange}
                required
                className='search_input peer'
            />           
            <button className='w-10 h-10 p-2 bg-white border border-gray-300 rounded-md shadow-sm flex-center hover:shadow-lg' onClick={handleSearch}>
                <FcSearch />    
            </button> 
        </form>
    );
}

export default SearchForm;