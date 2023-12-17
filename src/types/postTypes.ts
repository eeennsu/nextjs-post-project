import { z } from 'zod';

export const PostSchema = z.object({
    prompt: z.string().trim().min(5, { message: 'prompt must be minimum of 5 characters.' }).max(100, { message: 'promprt must be maximum of 100 charachers.' }),
    tags: z.string().trim().min(1).max(10, { message: 'tag must be maximum of 10 charachers.' }),
});

export type Post = z.infer<typeof PostSchema>;

const CreateNewPostSchema = PostSchema.extend({
    tags: z.string().trim().array(),
    userId: z.string()
});

const DBPostSchema = PostSchema.extend({
    creator: z.string().trim(),
    tags: z.string().trim().array(),
    _id: z.string(),
});

export type CreateNewPost = z.infer<typeof CreateNewPostSchema>;

export type DBPost = z.infer<typeof DBPostSchema>;