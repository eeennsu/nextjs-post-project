import { CreateNewPost } from '@/types/apiTypes';
import axiosInst from './axiosInst';

export const createNewPost_API = (postInfo: CreateNewPost) => axiosInst.post('/post', postInfo);