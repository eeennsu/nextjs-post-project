import type { FC, PropsWithChildren } from 'react';

const Prompt: FC<PropsWithChildren> = ({ children }) => {

    return (
        <p className='text-gray-700 my-7 font-satoshi line-clamp-1'>
            {children}
        </p>
    );
}

export default Prompt;