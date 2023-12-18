import type { FC } from 'react';
import Nav from './Nav';

const Header: FC = () => {

    return (
        <header className='w-full pt-3 mb-16'>
            <Nav />
        </header>
    );
}

export default Header;