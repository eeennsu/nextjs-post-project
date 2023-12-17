import type { Metadata, NextPage } from 'next';
import Form from '@/components/features/Form';

export const metadata: Metadata = {
    title: 'Create Post',
    description: 'Create your post'
}

const CreatePostPage: NextPage = () => {

    return (
        <Form 
            type='create'
        />
    );
};

export default CreatePostPage;