'use client';

import type { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { useState, useContext, createContext } from 'react'
import { Post } from '@/types/postTypes';

type PostContextType = {
    post: Post;
    setPost: Dispatch<SetStateAction<Post>>;
    submitting: boolean;
    setSubmitting: Dispatch<SetStateAction<boolean>>
}

const initValue: PostContextType = {
    post: { prompt: '', tags: '' },
    setPost: () => {},
    submitting: false,
    setSubmitting: () => {}
};

const PostContext = createContext<PostContextType>(initValue);

const PostProvider: FC<PropsWithChildren> = ({ children }) => {

    const [post, setPost] = useState<Post>({ prompt: '', tags: '' });
    const [submitting, setSubmitting] = useState<boolean>(false);

    return (
        <PostContext.Provider value={{ post, setPost, submitting, setSubmitting }}>
            {children}
        </PostContext.Provider>
    );
}

export const usePostContext = () => useContext(PostContext);

export default PostProvider;