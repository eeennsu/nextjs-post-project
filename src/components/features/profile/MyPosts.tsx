'use client';

import type { FC } from 'react';
import type { DBPost } from '@/types/postTypes';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { deleteMyPostAction } from '@/lib/postActions';
import PostCard from '../posts/PostCard';

type Props = {
    myPosts: DBPost[];
}

const MyPosts: FC<Props> = ({ myPosts }) => {

    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [deletePostId, setDeletePostId] = useState<string>('');
    const router = useRouter();

    const handleEdit = (_id: string) => {
        router.push(`/update-post/${_id}`);
    }

    const handleDelete = async (_id: string) => {
        const handleConfirmed = confirm('Are you sure you want to delete this post?');

        if (!handleConfirmed) {            
            return;
        }

        try {
            setIsDeleting(true);
            setDeletePostId(_id);
            await deleteMyPostAction(_id);        
            toast.success('Successfully deleted.');
        } catch (error) {
            console.log(error);
            toast.error('Failed to delete post.');
        } finally {

            setIsDeleting(false);
            setDeletePostId('');
        }
    }

    return (
        <div className='mt-10 prompt_layout'>
            {
                myPosts.map((myPost) => (
                    <PostCard 
                        key={myPost._id}
                        post={myPost} 
                        handleEdit={() => handleEdit(myPost._id)} 
                        handleDelete={() => handleDelete(myPost._id)} 
                        isDeleting={isDeleting && deletePostId === myPost._id} 
                    />
                ))
            }
        </div>
    );
}

export default MyPosts;