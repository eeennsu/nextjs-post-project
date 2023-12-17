'use client';

import { Post } from '@/types/postTypes';
import { FC, PropsWithChildren, Dispatch, createContext, useState, SetStateAction, useContext } from 'react';

export type PostContextType = {
    post: Post | null;
    setPost: Dispatch<SetStateAction<Post | null>>;
    submitting: boolean;
    setSubmitting: Dispatch<SetStateAction<boolean>>
}

const initValue: PostContextType = {
    post: null,
    setPost: () => {},
    submitting: false,
    setSubmitting: () => {}
};

const PostContext = createContext<PostContextType>(initValue);

const PostProvider: FC<PropsWithChildren> = ({ children }) => {

    const [post, setPost] = useState<Post | null>(null);
    const [submitting, setSubmitting] = useState<boolean>(false);

    return (
        <PostContext.Provider value={{ post, setPost, submitting, setSubmitting }}>
            {children}
        </PostContext.Provider>
    );
}

export const usePostContext = () => {

    return useContext(PostContext);
}

export default PostProvider;