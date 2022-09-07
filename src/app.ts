import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";

import mongoose from "mongoose";
import dotenv from "dotenv";

import { RequestError } from "./interfaces";

dotenv.config();

const { DB_HOST="https://localhost:3001", PORT = 3000 } = process.env;

import contactsRouter from "./routes/api/contacts";

const app: Express = express();

app.use(cors());
app.use(express.json())

app.use("/api/contacts", contactsRouter);

app.use((req: Request, res: Response): void => {
    res.status(404).json({
        message: "Not found"
    })
})

app.use((error: RequestError, req: Request, res: Response, next: NextFunction): void => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        message
    })
})

mongoose.connect(DB_HOST, { dbName: "hw02" })
    .then(()=>{
        app.listen(PORT);
        console.log("Server started!")
    })
    .catch(error=>{
        console.log(error.message);
        process.exit(1);
    })