import { UserAdminInfo, UserProfile } from "@/common.types";
import { getUsersForAdmin } from "@/lib/actions";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

    const { token } = await req.json();

    if(!token) {
        return NextResponse.json({
            status: 500,
            message: "There is no token provided"
        });
    }

    const res = await getUsersForAdmin(token) as UserAdminInfo;

    return NextResponse.json({
        status: 200,
        data: res?.userCollection?.edges
    });
}