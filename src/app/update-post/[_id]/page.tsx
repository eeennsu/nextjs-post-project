import Form from '@/components/features/create-post/Form';
import { getOnePost_API } from '@/lib/postApis';
import type { NextPage } from 'next';

type Props = {
    params: {
        _id: string;
    }
}

const UpdatePostPage: NextPage<Props> = async ({ params: { _id } }) => {

    const { post } = await getOnePost_API(_id);

    if (!post) {
        throw new Error('not found post.');
    }

    return (
        <Form type='update' prevPrompt={post.prompt} prevTags={post.tags} curPostId={_id} />
    );
};

export default UpdatePostPage;



export const revalidate = 10;