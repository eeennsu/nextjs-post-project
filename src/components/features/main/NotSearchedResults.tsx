import type { FC } from 'react';

const NotSearchedResults: FC = () => {

    return (
        <div>
            <p className='text-gray-700'>
                No results were found for your search.
            </p>
        </div>
    );
}

export default NotSearchedResults;