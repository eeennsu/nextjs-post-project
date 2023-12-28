import type { NextPage } from 'next';
import Feed from '@/components/features/main/Feed';

const HomePage: NextPage = async () => {

    return (
        <main className='flex-col w-full flex-center'>
            <h1 className='text-center head_text'>
                Discover & Share
                <br className='max-md:hidden' />
                <span className='text-center orange_gradient'>
                    AI-Powered Prompts
                </span>
            </h1>
            <p className='text-center desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius numquam voluptate quibusdam consequatu
            </p>
            <Feed />
        </main>
    );
};

export default HomePage;



// export const revalidate = 0;
// export const dynamic = 'force-dynamic'; 
// export const runtime = 'edge';