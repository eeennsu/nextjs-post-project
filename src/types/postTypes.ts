import { z } from 'zod';

export const PostSchema = z.object({
    prompt: z.string().trim().min(5, { message: 'prompt must be minimum of 5 characters.' }).max(100, { message: 'promprt must be maximum of 100 charachers.' }),
    tag: z.string().trim().min(1).max(10, { message: 'tag must be maximum of 10 charachers.' }).array(),
});

export type Post = z.infer<typeof PostSchema>;