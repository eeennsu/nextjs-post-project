import type { CreateNewPost, DBPost } from '@/types/postTypes';
import axiosInst from './axiosInst';

export const getPosts_API = async () => {
    const response =  await axiosInst.get<{ suc: boolean, posts: DBPost[] }>('/post');

    return response.data;
};

export const createNewPost_API = async (postInfo: CreateNewPost) => {
    const response = await axiosInst.post<{ suc: boolean, newPost: DBPost }>('/post/new', postInfo);

    return response.data;
};