import { NextAuthOptions, User } from "next-auth";
import { getServerSession } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { SessionInterface, UserProfile } from "@/common.types";
import { createUser, getUser } from "./actions";
import { AdapterUser } from "next-auth/adapters";
import { NextResponse } from "next/server";
import { comparePassword } from "./bcryptPassword";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { type: 'text' },
                password: { type: 'text' }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) { 
                    throw new Error("User not found");
                }

                if (credentials?.email && credentials?.password) {
                    const res = await getUser(credentials?.email) as { user?: UserProfile };
                    if (!res.user) {
                        throw new Error("User not found");
                    }
                    console.log(res, ' - res auth');
                    const isValidPassword = comparePassword(credentials.password, res.user?.password || '');
                    if(!isValidPassword) {
                        throw new Error("Wrong password");
                    }
                    if (isValidPassword) { 
                        return res?.user as UserProfile 
                    }
                }
                return null;
              }
        })
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