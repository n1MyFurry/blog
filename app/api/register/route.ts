import { UserProfile } from "@/common.types";
import { createUser, getUser } from "@/lib/actions";
import { encodedPassword } from "@/lib/bcryptPassword";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {email, nickname, password} = await req.json();
        console.log(email, nickname, password, 'credhjklhklj');
        
        const res = await getUser(email) as { user?: UserProfile };
        
        if(!res?.user) {

            const hashedPassword = encodedPassword(password);

            await createUser(nickname, email, 'https://lh3.googleusercontent.com/a/AAcHTtdgDJoivonAtXr6_1sIixYNbHjNWEDJBZ8iZSvK7EfS=s96-c', hashedPassword);

            return NextResponse.json({
                status: {"success": 200},
            });
        } else {
            return NextResponse.json({
                status: {"error": 403},
            });
        }
        
    } catch (error) {
        console.log(error);
    }
}