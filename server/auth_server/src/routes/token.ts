import express from "express";
import { OAuthClient } from "../auth_easy_src";

const router = express.Router();

type CallbackReqBody = {
    authorization_code: string,
    state: string,
}

router.post("/",async(req,res) => {
    const body: CallbackReqBody = req.body;

    try{
        const resp = await OAuthClient.get_instance().handle_callback({
            authorization_code: body.authorization_code,
            state: body.state
        });
        console.log(resp);
        if(resp !== undefined){
            res.json({
                message: 'SUCCESS',
                data: resp
            }).status(201);
            return;
        }
        res.json({
            message: "COULD NOT FETCH ACCESS_TOKEN"
        }).status(404);
    }catch(err){
        console.log(err);
        res.json({
            message: "INTERNAL SERVER ERROR"
        }).status(200);
    }
})

export default router;
