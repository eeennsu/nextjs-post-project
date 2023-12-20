'use client';

import ErrorLog from '@/components/commons/ErrorLog';
import type { FC } from 'react';
import { useEffect } from 'react';

type Props = {
    error: Error;
    reset: () => void;
}

const UpdatePostError: FC<Props> = ({ error, reset }) => {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <ErrorLog errMsg={error.message} reset={reset} />
    );
}

export default UpdatePostError;