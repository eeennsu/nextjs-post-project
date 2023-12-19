'use client'

import type { FC } from 'react';
import type { LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { useState, useEffect, useMemo } from 'react';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { signIn, signOut, getProviders } from 'next-auth/react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import MainLogo from './MainLogo';
import useSessionWithUserId from '@/hooks/auth/useSessionWithUserId';

const Nav: FC = () => {

    const { session } = useSessionWithUserId();
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

    const handleToggleDropdown = () => {
        setToggleDropdown(prev => !prev);
    }

    const handleCloseropdown = () => {
        setToggleDropdown(false);
    }

    const handleLogin = (id: string) => {
        toast.loading('Login...');
        signIn(id);
    }

    const handleLogout = () => {
        toast.loading('Logout...');
        signOut();
    }

    const handleMobileSignOut = () => {
        toast.loading('Logout...');
        handleCloseropdown();
        signOut();
    }

    const encodedUsername = useMemo(() => session?.user?.name ? encodeURIComponent(session?.user?.name as string) : undefined, [session]);

    useEffect(() => {
        getProviders()
            .then(res => setProviders(res));
    }, []);

    return (
        <nav className='w-full flex-between'>
            <MainLogo />     
            {/* desktop */}
            <div className='hidden sm:flex' role='desktop-menu'>
                {
                    !session?.user ? (
                        providers && Object.values(providers!).map((provider) => (
                            <button 
                                key={provider.name} 
                                className='black_btn' 
                                onClick={() => handleLogin(provider.id)}
                            >
                                Login
                            </button>
                        ))
                    ) : (     
                        <div className='flex gap-3 md:gap-4'>
                            <Link href='/create-post' className='black_btn'>
                                Create Post
                            </Link>                        
                            <button onClick={handleLogout} className='outline_btn'>
                                Logout
                            </button>                        
                            <Link href={`/profile/${encodedUsername}`}>                                    
                                <Image src={session?.user?.image || '/assets/images/logo.svg'} alt='profile' width={38} height={38} className='transition rounded-full hover:shadow-xl' />
                            </Link>
                        </div>
                    )
                }
            </div>
            
            {/* mobile */}
            <div className='relative flex sm:hidden'>
                {
                    !session?.user ? (
                        providers && Object.values(providers!).map((provider) => (
                            <button key={provider.name} onClick={() => handleLogin(provider.id)} className='black_btn'>
                                Login
                            </button>
                        ))
                    ) : (
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
                    )
                }
            </div>
        </nav>  
    );
};

export default Nav;