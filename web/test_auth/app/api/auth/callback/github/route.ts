import { NextApiResponse } from "next";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,res: NextApiResponse){
    
    const code = req.nextUrl.searchParams.get("code");
    const state = req.nextUrl.searchParams.get("state");

    const cookie_store = await cookies();

    console.log(code);
    console.log(state);

    try{
        const oauth_config = {
            authorization_code:code,
            state
        }
        const resp = await fetch("http://localhost:3210/token",{
            method: "POST",
            body: JSON.stringify(oauth_config),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(resp !== undefined){
            const { data } = await resp.json();
            cookie_store.set("access_token",data.access_token);
            return NextResponse.redirect("http://localhost:3000/home",{status: 307});
        }

        return NextResponse.redirect("http://localhost:3000/",{status: 307});
        
    }catch(err){
        console.log(err);
    }
}