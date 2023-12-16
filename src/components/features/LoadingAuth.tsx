import type { FC } from 'react';

const LoadingAuth: FC = () => {

    return (
        <div className='w-[78px] h-[32px] bg-black rounded-3xl flex items-center justify-center shadow-md'>
            <div className='w-5 h-5 border-4 border-gray-300 rounded-full shadow-sm animate-spin border-t-slate-600' />    
        </div>
    );
}

export default LoadingAuth;