import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainLogo: FC = () => {

    return (
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' alt='logo' width={30} height={30} className='object-contain' />
            <p className='logo_text'>Eunsu</p>
        </Link>    
    );
}

export default MainLogo;
