import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {email, nickname, password} = await req.json();
        return NextResponse.json({
            user: {
                email: email,
                nickname: nickname,
                password: password
            }
        });
    } catch (error) {
        console.log(error);
    }
}