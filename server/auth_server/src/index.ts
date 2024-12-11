import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth";
import tokenRouter from "./routes/token";

export const express_app=express();

const corsOptions={
    origin:"http://localhost:3000",
    methods:'GET,PUT,POST,DELETE,PATCH',
    credentials:true,

}

express_app.use(cors(corsOptions));
express_app.use(cookieParser());
express_app.use(express.json());
express_app.use("/auth",authRouter);
express_app.use("/token",tokenRouter);


express_app.listen(3001,() => {
    console.log("Auth server listening on port 3001");
})