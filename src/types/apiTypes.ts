import { Session } from 'next-auth';

export type User = Session['user'] & {
    _id?: string;           // mongodb의 ObjectId
}

export type DBUser = Required<User>;

export type SessionWithUserId = Session & { user?: User } | null | undefined;