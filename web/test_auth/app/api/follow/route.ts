import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { Octokit } from "octokit";
export async function PUT(req:NextRequest){
    const body = await req.json();
    const cookie_store = await cookies();
        const access_token = cookie_store.get("access_token");
        try{
            const octokit = new Octokit({
                auth: access_token?.value
            })
            
            const resp = await octokit.request(`PUT /user/following/${body.username}`, {
                username:body.username,
                headers: {
                'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            if(resp.status === 204){
                return Response.json({
                    message: 'success'
                },{status: 200})
            }
        }catch(err){
            console.log(err);
            return Response.json({
                message: 'failed'
            },{status: 400})
        }
}