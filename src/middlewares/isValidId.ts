import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
const { isValidObjectId } = mongoose;

import { createError } from "../helpers/index.js";

const isValidId = (req: Request, res: Response, next: NextFunction): void | never => {
    const { id } = req.params;
    if(!isValidObjectId(id)) {
        return next(createError(404, `${id} is not valid format`));
    }
    next();
}

export default isValidId;