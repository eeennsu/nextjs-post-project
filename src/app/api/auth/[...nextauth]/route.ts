import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from '@/db/db';
import User from '@/models/User';

const handler = NextAuth({
    // Configure one or more authentication providers
    // providers: [
    //     GoogleProvider({
            
    //     }),
    //     // ...add more providers here
    // ],
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    
    callbacks: {
        session: async ({ session }) => {
            const sessionUser = await User.findOne({ email: session.user?.email });
            
            const userWithId = {
                ...session.user,
                _id: sessionUser._id.toString()
            };
        
            return {
                ...session,
                user: userWithId
            };
        },

        signIn: async ({ user }) => {
            try {
                await connectToDB();

                const existUser = await User.findOne({ email: user.email });
               
                // 이미 존재하는 유저인지 확인하고, 없으면 생성
                if (!existUser) {
                    await User.create({
                        email: user?.email,
                        username: user?.name?.replace(' ', '').toLowerCase(),
                        image: user?.image
                    });
                } 

                return true;

            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
});

export { handler as GET, handler as POST };