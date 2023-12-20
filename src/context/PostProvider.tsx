'use client';

import type { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { useState, useContext, createContext } from 'react'
import { DBPost, Post } from '@/types/postTypes';

export type SearchSelect = 'tag' | 'prompt' | 'creator';

type PostContextType = {
    post: Post;
    setPost: Dispatch<SetStateAction<Post>>;
    submitting: boolean;
    setSubmitting: Dispatch<SetStateAction<boolean>>;
    postResults: DBPost[] | null;
    setPostResults: Dispatch<SetStateAction<DBPost[] | null>>;
    searchType: SearchSelect;
    setSearchType: Dispatch<SetStateAction<SearchSelect>>;
}

const initValue: PostContextType = {
    post: { prompt: '', tags: '' },
    setPost: () => {},
    submitting: false,
    setSubmitting: () => {},
    postResults: [],
    setPostResults: () => {},
    searchType: 'tag',
    setSearchType: () => {}
};

const PostContext = createContext<PostContextType>(initValue);

const PostProvider: FC<PropsWithChildren> = ({ children }) => {

    const [post, setPost] = useState<Post>({ prompt: '', tags: '' });
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [postResults, setPostResults] = useState<DBPost[] | null>(null);
    const [searchType, setSearchType] = useState<SearchSelect>('tag');

    return (
        <PostContext.Provider value={{ 
            post, setPost, 
            submitting, setSubmitting, 
            postResults, setPostResults,
            searchType, setSearchType
        }}>
            {children}
        </PostContext.Provider>
    );
}

export const usePostContext = () => useContext(PostContext);

export default PostProvider;