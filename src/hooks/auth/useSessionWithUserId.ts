import { SessionWithUserId } from '@/types/apiTypes';
import { useSession } from 'next-auth/react';

const useSessionWithUserId = () => {
    const { data, status } = useSession();
    const session: SessionWithUserId = data;

    return { session, status };
}

export default useSessionWithUserId;

