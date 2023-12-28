'use client';

import type { FC } from 'react';
import { useEffect } from 'react';

type Props = {
    error: Error;
}

const Error: FC<Props> = ({ error }) => {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            {error.message}
        </div>
    );
}

export default Error;