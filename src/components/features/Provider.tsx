import type { FC, PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

type Props = {
    session: Session
}

const Provider: FC<PropsWithChildren<Props>> = ({ session, children }) => {

    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
};

export default Provider;