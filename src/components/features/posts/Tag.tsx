import type { FC, PropsWithChildren } from 'react';

type Props = {
    onClick: () => void;
}

const Tag: FC<PropsWithChildren<Props>> = ({ children, onClick}) => {
    
    return (
        <span className='px-3 py-1.5 text-sm tracking-widest rounded-full bg-orange-400/75 text-white/90 hover:bg-orange-500/80' onClick={onClick}>
            #{children}
        </span> 
    );
}

export default Tag;