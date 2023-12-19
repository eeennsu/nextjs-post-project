import type { FC } from 'react';

const Spinner: FC = () => {

    return (
        <div className='w-5 h-5 border-4 border-gray-300 rounded-full shadow-sm animate-spin border-t-slate-600' />    
    );
}

export default Spinner;