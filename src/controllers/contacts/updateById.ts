import { Request, Response } from "express";
import Contact, { IContact } from "../../models/contact.js";

import { createError } from "../../helpers/index.js";

const updateById = async (req: Request, res: Response): Promise<void | never> => {
    const { id } = req.params;
    const result: IContact | null = await Contact.findByIdAndUpdate({_id: id}, req.body, {new: true});
    if (!result) {
        throw createError(404, "Not found")
    }
    res.status(200).json(result);
}

export default updateById;