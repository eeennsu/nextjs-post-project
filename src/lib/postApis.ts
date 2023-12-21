import type { CreateNewPost, DBPost, Post } from '@/types/postTypes';
import axiosInst from './axiosInst';

// server
export const getAllPosts_API = async () => {
    //const { data } =  await axiosInst.get<{ allPosts: DBPost[] }>('/post');
    const response = await fetch('http://localhost:3000/api/post', { 
        method: 'GET',
    });

    const data = await response.json();

    if (!data) {
        throw new Error('Faied to get all posts.');
    }

    return data;
};

// server
export const getMyPosts_API = async (_id: string) => {
    // const { data } = await axiosInst.get<{ myPosts: DBPost[] }>(`/user/posts/${_id}`);

    const response = await fetch(`http://localhost:3000/api/user/posts/${_id}`, { 
        method: 'GET' 
    });

    const data = await response.json();

    if (!data) {
        throw new Error('Faied to get my posts.');
    }

    return data;
};

// server
export const getOnePost_API = async (_id: string) => { 
    // const { data } = await axiosInst.get<{ suc: boolean, post?: DBPost }>(`/post/${_id}`);

    const response = await fetch(`http://localhost:3000/api/post/${_id}`, { 
        method: 'GET', 
        cache: 'no-store' 
    });

    const data = await response.json();

    if (!data) {
        throw new Error('Failed to get my post.');
    }

    return data;
}

// client
export const createNewPost_API = async (postInfo: CreateNewPost) => {
    // const { data } = await axiosInst.post<{ newPost: DBPost }>('/post/new', postInfo);

    const response = await fetch(`http://localhost:3000/api/post/new`, {
        method: 'POST',
        body: JSON.stringify(postInfo)
    });

    const data = await response.json();

    return data;
};

// client
export const deleteMyPost_API = async (_id: string) => {
    // const { data } = await axiosInst.delete<{ suc: boolean; msg: string; }>(`/post/${_id}`);

    const response = await fetch(`http://localhost:3000/api/post/${_id}`, {
        method: 'DELETE',
    });

    const data = await response.json();

    return data;
}

// client
export const updateMyPost_API = async (_id: string, updatedPost: Partial<DBPost>) => {
    // const { data } = await axiosInst.patch<{ suc: boolean; msg: string; }>(`/post/${_id}`, updatedPost);

    const response = await fetch(`http://localhost:3000/api/post/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedPost)
    });

    const data = await response.json();

    return data;
}

// client
export const searchPosts_API = async (type: string, term: string) => {
    // const { data } = await axiosInst.get<{ results: DBPost[] }>(`/post/search?type=${type}&term=${term}`);

    const response = await fetch(`http://localhost:3000/api/post/search?type=${type}&term=${term}`, {
        method: 'GET',
    });

    const data = await response.json();

    return data;
}