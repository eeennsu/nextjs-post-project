import type { CreateNewPost, DBPost } from '@/types/postTypes';
import axiosInst from './axiosInst';

// server
export const getAllPosts_API = async () => {
    const { data } =  await axiosInst.get<{ allPosts: DBPost[] }>('/post');

    if (!data) {
        throw new Error('Faied to get all posts.');
    }

    return data;
};

// server
export const getMyPosts_API = async (_id: string) => {
    const { data } = await axiosInst.get<{ myPosts: DBPost[] }>(`/user/posts/${_id}`);

    if (!data) {
        throw new Error('Faied to get my posts.');
    }

    return data;
};

// client
export const createNewPost_API = async (postInfo: CreateNewPost) => {
    const { data } = await axiosInst.post<{ newPost: DBPost }>('/post/new', postInfo);

    return data;
};

export const deleteMyPost_API = async (_id: string) => {
    const { data } = await axiosInst.delete<{ suc: boolean; msg: string; }>(`/post/${_id}`);

    return data;
}