import { cookies } from "next/headers";

export async function GET(){
    const cookie_store = await cookies();

    const access_token = cookie_store.get("access_token");
    console.log(access_token)
    if(access_token !== undefined){
        try{
            const resp = await fetch("https://api.github.com/user",{
                headers: {
                    "Authorization": `Bearer ${access_token.value}`,
                    "Content-Type": "application/json",
                    "X-GitHub-Api-Version": "2022-11-28",
                    "Accept": "application/vnd.github+json"
                }
            });
            const data = await resp.json();
            console.log(data)
            return Response.json({
                message: "SUCCESS",
                data
            },{status: 200});
        }catch(err){
            return Response.json({
                message: "ERROR"
            },{status: 404});
        }
    }
    return Response.json({
        message: "TOKEN ABSENT"
    },{status: 401})
}