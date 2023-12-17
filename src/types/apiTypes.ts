import { z } from 'zod';
import { PostSchema } from './postTypes';
import { Session } from 'next-auth';




export type User = Session['user'] & {
    id?: string;
}

export type SessionWithUserId = Session & { user?: User } | null | undefined;