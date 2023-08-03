import { NextAuthOptions, User } from "next-auth";
import { getServerSession } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { SessionInterface, UserProfile } from "@/common.types";
import { createUser, getUser } from "./actions";
import { AdapterUser } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        // Credentials({

        // })
    ],
    jwt: {
        encode: ({ secret, token }) => {
            const encodedToken = jsonwebtoken.sign({
                ...token,
                iss: 'grafbase',
                exp: Math.floor(Date.now() / 1000) + 60 * 60
            }, secret);
            return encodedToken;
        },
        decode: async ({ secret, token }) => {
            const decodedToken = jsonwebtoken.verify(token!, secret) as JWT;
            return decodedToken;
        }
    },
    callbacks: {
        async session({ session }) {
            const email = session?.user?.email as string;

            try {
                const data = await getUser(email) as { user?: UserProfile };

                const newSession = {
                    ...session,
                    user: {
                        ...session.user,
                        ...data?.user
                    }
                }

                return newSession;
            } catch (error) {
                console.log('Error retrieving user data', error);
                return session;
            }
        },
        async signIn({ user }: { user: AdapterUser | User }) {
            console.log(user, 'user cred');
            try {
                const userExists = await getUser(user?.email as string) as { user?: UserProfile };

                if (!userExists.user) {
                    await createUser(
                        user.name as string, 
                        user.email as string, 
                        user.image as string
                    );
                }

                return true;
            } catch (error: any) {
                console.log(error);
                return false;
            }
        }
    }
}


export async function getCurrentUser() {
    const session = await getServerSession(authOptions) as SessionInterface;
    return session;
}