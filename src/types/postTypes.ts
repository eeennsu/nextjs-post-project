import { string, z } from 'zod';

export const PostSchema = z.object({
    prompt: z.string().trim().min(5, { message: 'prompt must be minimum of 5 characters.' }).max(100, { message: 'promprt must be maximum of 100 charachers.' }),
    tags: z.string().trim().min(1).max(10, { message: 'tag must be maximum of 10 charachers.' }),
});

export const CreateNewPostSchema = PostSchema.extend({
    tags: z.string().trim().array(),
    _id: z.string()
});

export const CreatorSchema = z.object({
    email: z.string().email().optional(),
    image: z.string().url().optional(),
    username: z.string().optional(),
    _id: z.string(),
});

export const DBPostSchema = PostSchema.extend({
    creator: CreatorSchema,
    tags: z.string().trim().array(),
    _id: z.string(),
    createdAt: z.string(),
});

export type Post = z.infer<typeof PostSchema>;
export type CreateNewPost = z.infer<typeof CreateNewPostSchema>;        
export type Creator = z.infer<typeof CreatorSchema>;
export type DBPost = z.infer<typeof DBPostSchema>;