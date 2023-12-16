'use client'

import type { FC } from 'react';
import type { LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import MainLogo from './MainLogo';
import Loading from '../commons/Loading';

const Nav: FC = () => {

    const { data: session, status } = useSession();
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

    useEffect(() => {
        getProviders()
            .then(res => setProviders(res));
    }, []);

    useEffect(() => {
        session && console.log(session);
    }, [session]);

    const handleToggleDropdown = () => {
        setToggleDropdown(prev => !prev);
    }

    const handleCloseropdown = () => {
        setToggleDropdown(false);
    }

    const handleMobileSignOut = () => {
        handleCloseropdown();
        signOut();
    }

    return (
        <nav className='w-full flex-between'>
            <MainLogo />

            {/* desktop */}
            <div className='hidden sm:flex' role='desktop-menu'>
                {
                    status === 'loading' ? (
                        <Loading />
                    ) : status === 'unauthenticated' ? (
                        providers && Object.values(providers!).map((provider) => (
                            <button 
                                key={provider.name} 
                                className='black_btn' 
                                onClick={() => signIn(provider.id)}
                            >
                                Login
                            </button>
                        ))
                    ) : (     
                        <div className='flex gap-3 md:gap-4'>
                            <Link href='/create-post' className='black_btn'>
                                Create Post
                            </Link>
                        
                            <button onClick={() => signOut()} className='outline_btn'>
                                Logout
                            </button>
                        
                            <Link href='/profile'>                                    
                                <Image src={session?.user?.image || '/assets/images/logo.svg'} alt='profile' width={38} height={38} className='transition rounded-full hover:shadow-xl' />
                            </Link>
                        </div>
                    )
                }
            </div>
            
            {/* mobile */}
            <div className='relative flex sm:hidden'>
                {
                    session?.user ?  (
                        <div className='flex'>
                            <Image src='/assets/images/logo.svg' alt='profile' className='object-contain cursor-pointer' width={37} height={37} onClick={handleToggleDropdown}/>
                            {
                                toggleDropdown && (
                                    <div className='dropdown'>
                                        <Link className='dropdown_link' href='/profile' onClick={handleCloseropdown}>
                                            My Profile
                                        </Link>
                                        <Link className='dropdown_link' href='/create-post' onClick={handleCloseropdown}>
                                            Create Post
                                        </Link>
                                        <button className='w-full mt-5 black_btn' onClick={handleMobileSignOut}>
                                            Logout
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    ) : (
                        providers && Object.values(providers!).map((provider) => (
                            <button key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                                Login
                            </button>
                        ))
                    )
                }
            </div>
        </nav>  
    );
};

export default Nav;