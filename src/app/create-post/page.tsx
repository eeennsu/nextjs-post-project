import type { Metadata, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@/components/features/Form';
import { usePostContext } from '@/context/PostProvider';

export const metadata: Metadata = {
    title: 'Create Post',
    description: 'Create your post'
}

const CreatePostPage: NextPage = () => {

    const handleSubmit = () => {

    }

    return (
        <Form 
            type='Create'
        />
    );
};

export default CreatePostPage;