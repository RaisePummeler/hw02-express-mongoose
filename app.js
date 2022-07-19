import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST } = process.env;

import booksRouter from "./routes/api/books.js";

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/books", booksRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})

app.use((error, req, res, next)=> {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        message
    })
})

app.listen(3000);

mongoose.connect(DB_HOST)
    .then(()=>console.log("Database connected!"))
    .catch(error=>console.log(error.message))