'use server';

import type { CreateNewPost, DBPost } from '@/types/postTypes';
import { url } from './config';
import { revalidatePath } from 'next/cache';

export const createNewPostAction = async (newPost: CreateNewPost) => {
    const res = await fetch(`${url}/post/new`, {
        method: 'POST',
        body: JSON.stringify(newPost)
    });

    await res.json();

    revalidatePath('/', 'page');
}

export const deleteMyPostAction = async (_id: string) => {
    const res = await fetch(`${url}/post/${_id}`, {
        method: 'DELETE',
    });

    await res.json();

    revalidatePath('/profile/[_id]', 'page');
}

export const updateMyPostAction = async (_id: string, updatedPost: Partial<DBPost>) => {
    const res = await fetch(`${url}/post/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedPost)
    });

    await res.json();

    revalidatePath('/profile/[_id]', 'page');
}