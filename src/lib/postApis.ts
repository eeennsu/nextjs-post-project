import type { CreateNewPost, DBPost } from '@/types/postTypes';
import axiosInst from './axiosInst';

export const getPosts_API = async () => {
const { data } =  await axiosInst.get<{ posts: DBPost[] }>('/post');

    if (!data) {
        throw new Error('Faied to get posts.');
    }

    return data;
};

export const createNewPost_API = async (postInfo: CreateNewPost) => {
    const { data } = await axiosInst.post<{ newPost: DBPost }>('/post/new', postInfo);

    return data;
};