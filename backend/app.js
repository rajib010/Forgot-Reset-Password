import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}
))

app.use(express.json());

app.use(express.static("public"))

app.use(cookieParser());

import userRouter from './routers/userRouter.js';

app.use("/api/user",userRouter);


export default app;