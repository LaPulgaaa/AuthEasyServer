import { cookies } from "next/headers";

import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest){
    
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
        })
        if(resp !== undefined){
            const { access_token, refresh_token} = await resp.json();
            console.log("Access token "+access_token);
            cookie_store.set("access_token",access_token);
            cookie_store.set("refresh_token",refresh_token);
        }

        redirect("localhost:3000")
    }catch(err){
        console.log(err);
        redirect("localhost:3000")
    }
}