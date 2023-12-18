import type { FC, PropsWithChildren } from 'react';

const Tag: FC<PropsWithChildren> = ({ children }) => {
    
    return (
        <span className='px-3 py-1.5 tracking-widest rounded-full bg-orange-400/75 text-white/90'>
            #{children}
        </span> 
    );
}

export default Tag;