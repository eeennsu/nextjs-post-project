import { DBUser } from '@/types/apiTypes';
import { url } from './config';
// import axiosInst from './axiosInst';

export const getAllUsers_API = async () => {
    // const { data } = await axiosInst.get<{ users: DBUser[] }>('/user');
    
    const response = await fetch(`${url}/user`, {
        method: 'GET',
    });

    const data = await response.json();

    return data;
}

export const getOneUser_API = async (_id: string) => {
    //const { data } = await axiosInst.get<{ user: DBUser }>(`/user/${_id}`);

    const response = await fetch(`${url}/user/${_id}`, {
        method: 'GET',
    });
    
    const data = await response.json();

    return data;
}