import { UserProfile } from "@/common.types";
import { getUser, setAdmin } from "@/lib/actions";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const { adminEmail } = await req.json();
    console.log(adminEmail, ' - admem');
    const res = await getUser(adminEmail) as {user: UserProfile};
    console.log(res?.user, ' - hjhkj');
    if (!res?.user) {
        return NextResponse.json({
            status: 404,
            message: "User not fouund!"
        });
    }

    await setAdmin(adminEmail);
    return NextResponse.json({
        status: 200,
        message: "Success!"
    });
}