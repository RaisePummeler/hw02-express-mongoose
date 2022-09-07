import { Request, Response } from "express";
import Contact, { IContact } from "../../models/contact.js";

import { createError } from "../../helpers/index.js";

const removeById = async (req: Request, res: Response): Promise<void | never> => {
    const { id } = req.params;
    const result: IContact | null = await Contact.findByIdAndRemove(id);
    if(!result) {
        throw createError(404, "Not found")
    } else {
        res.status(200).json({
            message: "contact deleted"
        })
    }
}

export default removeById;