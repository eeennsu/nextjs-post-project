'use client';

import type { ChangeEvent, FC, FormEvent } from 'react';
import type { CreateNewPost } from '@/types/postTypes';
import type { SessionWithUserId } from '@/types/apiTypes';
import { usePostContext } from '@/context/PostProvider';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { createNewPost_API } from '@/lib/postApis';
import Link from 'next/link';
import FormHead from '../main/FormHead';

type Props = {
    type: PostType;
}

const Form: FC<Props> = ({ type }) => {

    const { data } = useSession();
    const session: SessionWithUserId = data; 
    const router = useRouter();
    console.log(session);
    const { post, setPost, submitting, setSubmitting } = usePostContext();
    
    const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPost(prev => ({
            ...prev!,
            prompt: e.target.value
        }));      
    }

    const handleTagsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPost(prev => ({
            ...prev!,
            tags: e.target.value
        }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
    
        if (!session?.user || !session.user._id) {
            toast.warn('Not Found User.');
            return;
        }

        if (!post?.prompt || post.tags.length <= 0) {
            toast.warn("It doesen't have post");
            return;
        }

        if (!post.tags.startsWith('#')) {
            toast.warn('#으로 태그를 시작해주세요');
            return;
        }
    
        switch(type) {
            case 'create': createNewPost(); break;
        }
    }

    const createNewPost = async () => {
        const _tags = post.tags.trim().replaceAll(' ', '').split('#').splice(1, post.tags.length);
     
        const postInfo: CreateNewPost = {
            prompt: post!.prompt.trim(),
            tags: _tags,
            _id: session?.user?._id!
        };     

        try {
            const data = await createNewPost_API(postInfo);

            if (data) {
                toast.success('create new post successfully!');
            } else {
                toast.error('Failed new Post.');
            }
            
        } catch (error) {
            console.log(error);
            toast.error('Failed new Post.');
        } finally {
            setSubmitting(false);
            router.push('/');
            router.refresh();
        }
    }

    return (
        <section className='flex-col flex-start'>
            <FormHead type={type} />
            <form className='flex flex-col w-full max-w-2xl gap-8 mt-10 glassmorphism' onSubmit={handleSubmit}>
                <label>
                    <span className='text-base font-semibold text-gray-700 font-satoshi'>
                        Your AI Prompt
                    </span>
                    <textarea 
                        className='form_textarea' 
                        value={post?.prompt} 
                        onChange={handlePromptChange} 
                        placeholder='Write your prompt here...' 
                    />                       
                </label>
                <label>
                    <span className='text-base font-semibold text-gray-700 font-satoshi'>
                        Tag
                        <span className='ml-3 italic font-normal opacity-75'>(#product #webdevlopment #idea)</span>
                    </span>
                    <input 
                        value={post?.tags}
                        onChange={handleTagsChange}
                        placeholder='#tag'
                        required
                        className='form_input'
                    />
                </label>
                <div className='gap-4 flex-end'>
                    <Link href='/' className='px-4 py-2 text-gray-700 bg-orange-200 rounded-md shadow-md hover:bg-orange-300'>
                        Cancel
                    </Link>
                    <button className='px-4 py-2 text-gray-700 bg-blue-200 rounded-md shadow-md hover:bg-blue-300' type='submit' disabled={submitting}>
                        {submitting ? `${type}...` : 'Submit'}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Form;