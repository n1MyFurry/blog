import { UserProfile } from "@/common.types";
import { getUserById } from "@/lib/actions";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

    const { token, id } = await req.json();

    if(!token) {
        return NextResponse.json({
            status: 500,
            message: "There is no token provided"
        });
    }

    const response = await getUserById(id) as UserProfile;
    
    return NextResponse.json({
        status: 200,
        data: response
    });
}