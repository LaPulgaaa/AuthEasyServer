import express from "express";
import { OAuthClient } from "@lapulga_28/auth_easy";

const router = express.Router();

type CallbackReqBody = {
    code: string,
    state: string,
}

router.post("/",async(req,res) => {
    const body: CallbackReqBody = req.body;

    try{
        const resp = await OAuthClient.get_instance().handle_callback({
            authorization_code: body.code,
            state: body.state
        });

        if(resp !== undefined){
            res.json({
                message: 'SUCCESS',
                data: resp
            }).status(201);
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
