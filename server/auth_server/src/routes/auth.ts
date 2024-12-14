import express from "express";
import { OAuthClient } from "../auth_easy_src";
import { OAuthClientConfigParams } from "../auth_easy_src/types";
import { GITHUB_OAUTH_CONFIG } from "../const/github";
const router = express.Router();

type OAuthInitReqBody = {
    client_id: string,
    client_secret: string,
    provider: "github" | "google",
    organisation?: string,
    audience?: string,
    redirect_uri: string,
    scope?: string,
}

type CallbackReqBody = {
    code: string,
    state: string,
}

router.post("/",async(req,res) => {
    const body:OAuthInitReqBody = req.body;

    try{
        const connection = body.provider;
        console.log(body.scope)
        if(connection === "github"){
            const oauth_client:OAuthClientConfigParams = {
                ...GITHUB_OAUTH_CONFIG,
                client_id: body.client_id,
                client_secret: body.client_secret,
                connection: "github",
                organisation: body.audience,
                redirect_uri: body.redirect_uri,
                scope: body.scope,
            }
            const resp = await OAuthClient.get_instance(oauth_client).start_auth_flow();
            console.log(resp);
            res.json({
                message: "SUCCESS",
                auth_url: resp,
            }).status(201);

            return;
        }

        res.json({
            message: 'AUTH PROVIDER NOT SUPPORTED',
        }).status(200);

        return;
    }catch(err){
        console.log(err);
        res.json({
            message: "INTERNAL SERVER ERROR"
        }).status(500)
    }
})

export default router;
