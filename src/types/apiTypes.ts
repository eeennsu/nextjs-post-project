import { z } from 'zod';
import { PostSchema } from './postTypes';
import { Session } from 'next-auth';

const CreateNewPostSchema = PostSchema.extend({
    userId: z.string()
});

export type CreateNewPost = z.infer<typeof CreateNewPostSchema>;

export type SessionUserWithId = Session['user'] & { id: string }