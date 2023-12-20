import type { CreateNewPost, DBPost, Post } from '@/types/postTypes';
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

// server
export const getOnePost_API = async (_id: string) => { 
    const { data } = await axiosInst.get<{ suc: boolean, post?: DBPost }>(`/post/${_id}`);

    if (!data) {
        throw new Error('Failed to get my post.');
    }

    return data;
}

// client
export const createNewPost_API = async (postInfo: CreateNewPost) => {
    const { data } = await axiosInst.post<{ newPost: DBPost }>('/post/new', postInfo);

    return data;
};

// client
export const deleteMyPost_API = async (_id: string) => {
    const { data } = await axiosInst.delete<{ suc: boolean; msg: string; }>(`/post/${_id}`);

    return data;
}

// client
export const updateMyPost_API = async (_id: string, updatedPost: Partial<DBPost>) => {
    const { data } = await axiosInst.patch<{ suc: boolean; msg: string; }>(`/post/${_id}`, updatedPost);

    return data;
}