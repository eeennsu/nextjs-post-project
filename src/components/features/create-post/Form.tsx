'use client';

import type { FC, ChangeEvent, FormEvent } from 'react';
import type { CreateNewPost } from '@/types/postTypes';
import type { SessionWithUserId } from '@/types/apiTypes';
import { useEffect } from 'react';
import { usePostContext } from '@/context/PostProvider';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { createNewPostAction, updateMyPostAction } from '@/lib/postActions';
import { revalidatePath } from 'next/cache';
import { setTagsWithShop } from '@/utils/setTag';
import Link from 'next/link';
import FormHead from '../main/FormHead';
import Spinner from '@/components/commons/Spinner';
import { useRouter } from 'next/navigation';

type Props = {
    type: PostType;
    prevPrompt?: string;
    prevTags?: string[];
    curPostId?: string;
}

const Form: FC<Props> = ({ type, prevPrompt, prevTags, curPostId }) => {

    const { data } = useSession();
    const router = useRouter();
    const session: SessionWithUserId = data; 
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

        setSubmitting(true);

        const _tags = setTagsWithShop(post.tags);

        const postInfo: CreateNewPost = {
            prompt: post!.prompt.trim(),
            tags: _tags,
            _id: session?.user?._id!
        };     
    
        switch(type) {
            case 'create':
                try {
                    await createNewPostAction(postInfo); 
                    toast.success('Create new post successfully!');
                } catch (error) {
                    console.log(error);
                    toast.error('Failed create new post.');
                } finally {
                    router.push('/');
                }

                break;
            
            case 'update':             
                if (!curPostId) {
                    toast.error('Not founded current post.');
                    return;
                }

                try {
                    await updateMyPostAction(curPostId!, postInfo); 
                    toast.success('Update exist post successfully!');            
                } catch (error) {
                    console.log(error);
                    toast.error('Failed update exists post.');
                } finally {
                    router.push(`/profile/${session.user._id}`);
                }

                break;            
        }

        setSubmitting(false);  
        setPost({ 
            prompt: '',
            tags: ''
        });
    }

    useEffect(() => {
        if (type === 'update' && prevPrompt && prevTags) {
            setPost({
                prompt: prevPrompt,
                tags: ['', ...prevTags].join('#')
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, prevPrompt, prevTags]);

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
                    <Link href='/' className='bg-orange-200 form_buton hover:bg-orange-300'>
                        Cancel
                    </Link>
                    {
                        type === 'create' ? (
                            <button className={`form_buton bg-blue-200  hover:bg-blue-300 ${submitting && 'bg-blue-100'}`} type='submit' disabled={submitting}>
                                {
                                    submitting ? (
                                        <Spinner />                             
                                    ) : (
                                        <span className='first-letter:uppercase'>
                                            {type}
                                        </span>
                                    )
                                }
                            </button>
                        ) : (
                            <button className={`form_buton bg-teal-200 hover:bg-teal-300 ${submitting && 'bg-teal-100'}`} type='submit' disabled={submitting}>
                                {
                                    submitting ? (
                                        <Spinner />                             
                                    ) : (
                                        <span className='first-letter:uppercase'>
                                            {type}
                                        </span>
                                    )
                                }
                            </button>
                        )
                    }
                </div>
            </form>
        </section>
    );
}

export default Form;