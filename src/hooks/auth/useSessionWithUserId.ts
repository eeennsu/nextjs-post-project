import { SessionWithUserId } from '@/types/apiTypes';
import { useSession } from 'next-auth/react';

const useSessionWithUserId = () => {
    const { data } = useSession();
    const session: SessionWithUserId = data;

    return { session };
}

export default useSessionWithUserId;

