import { DBUser } from '@/types/apiTypes';
import axiosInst from './axiosInst';

export const getAllUsers_API = async () => {
    const { data } = await axiosInst.get<{ users: DBUser[] }>('/user');

    return data;
}

export const getOneUser_API = async (_id: string) => {
    const { data } = await axiosInst.get<{ user: DBUser }>(`/user/${_id}`);

    return data;
}