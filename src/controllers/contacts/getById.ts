import { Request, Response } from "express";
import Contact, { IContact } from "../../models/contact.js";

import { createError } from "../../helpers/index.js";

const getById = async (req: Request, res: Response): Promise<void | never> => {
    const { id } = req.params;
    const result: IContact | null = await Contact.findOne({ _id: id });
    if(!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default getById;