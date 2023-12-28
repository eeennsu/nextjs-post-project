import type { CreateNewPost } from '@/types/postTypes';
import { url } from './config';
// import axiosInst from './axiosInst';

// server
export const getAllPosts_API = async () => {
    //const { data } =  await axiosInst.get<{ allPosts: DBPost[] }>('/post');
    const res = await fetch(`${url}/post`, { 
        method: 'GET',
    });

    const data = await res.json();

    if (!data) {
        throw new Error('Failed to get all posts.');
    }

    return data;
}

// server
export const getMyPosts_API = async (_id: string) => {
    // const { data } = await axiosInst.get<{ myPosts: DBPost[] }>(`/user/posts/${_id}`);

    const res = await fetch(`${url}/user/posts/${_id}`, { 
        method: 'GET' 
    });

    const data = await res.json();

    if (!data) {
        throw new Error('Faied to get my posts.');
    }

    return data;
}

// server
export const getOnePost_API = async (_id: string) => { 
    // const { data } = await axiosInst.get<{ suc: boolean, post?: DBPost }>(`/post/${_id}`);

    const res = await fetch(`${url}/post/${_id}`, { 
        method: 'GET', 
        cache: 'no-store' 
    });

    const data = await res.json();

    if (!data) {
        throw new Error('Failed to get my post.');
    }

    return data;
}

// client
export const createNewPost_API = async (postInfo: CreateNewPost) => {
    // const { data } = await axiosInst.post<{ newPost: DBPost }>('/post/new', postInfo);

    const res = await fetch(`${url}/post/new`, {
        method: 'POST',
        body: JSON.stringify(postInfo)
    });

    const data = await res.json();

    return data;
}

// client 서버 액션으로 이동
// export const deleteMyPost_API = async (_id: string) => {
//     // const { data } = await axiosInst.delete<{ suc: boolean; msg: string; }>(`/post/${_id}`);

//     const res = await fetch(`${url}/post/${_id}`, {
//         method: 'DELETE',
//     });

//     const data = await res.json();

//     return data;
// }

// client     // 서버액션으로 이동
// export const updateMyPost_API = async (_id: string, updatedPost: Partial<DBPost>) => {
//     // const { data } = await axiosInst.patch<{ suc: boolean; msg: string; }>(`/post/${_id}`, updatedPost);

//     const res = await fetch(`${url}/post/${_id}`, {
//         method: 'PATCH',
//         body: JSON.stringify(updatedPost)
//     });

//     const data = await res.json();

//     return data;
// }

// client
export const searchPosts_API = async (type: string, term: string) => {
    // const { data } = await axiosInst.get<{ results: DBPost[] }>(`/post/search?type=${type}&term=${term}`);

    const res = await fetch(`${url}/post/search?type=${type}&term=${term}`, {
        method: 'GET',
    });

    const data = await res.json();

    return data;
}