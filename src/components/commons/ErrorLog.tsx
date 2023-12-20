import type { FC } from 'react';

type Props = {
    errMsg: string;
    reset: () => void;
}

const ErrorLog: FC<Props> = ({ errMsg, reset }) => {

    return (
        <div className='flex flex-col items-center mt-10'>
            <h2 className='text-5xl font-bold'>Something went to wrong!</h2>
            <p className='text-gray-700 mt-10'>
                {errMsg}
            </p>
            <div className='mt-16'>
                <button className=' bg-orange-500 text-white px-4 py-3 rounded-xl shadow-sm ' onClick={() => reset()}>
                    Try again!
                </button>
            </div>           
        </div>
    );
}

export default ErrorLog;