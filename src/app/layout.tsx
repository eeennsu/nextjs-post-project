import type { Metadata, NextPage } from 'next'
import type { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/features/Header';
import AuthProvider from '@/components/features/AuthProvider';
import PostProvider from '@/context/PostProvider';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'My Next Post App',
  description: 'Generated by create next app',
}

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <html lang='en'>
            <body>
                <AuthProvider>
                    <PostProvider>
                        <div className='background'>
                            <div className='gradient' />
                        </div>
                        <div className='app'>
                            <Header />
                            {children}
                        </div>
                        <ToastContainer 
                            position='top-center'
                            draggable
                            theme='light'
                        />
                    </PostProvider>                    
                </AuthProvider>
            </body>
        </html>
    );
}

export default RootLayout;