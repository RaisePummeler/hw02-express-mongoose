import { Request, Response } from "express";
import Contact, { IContact } from "../../models/contact.js";

const add = async (req: Request, res: Response): Promise<void> => {
    const result: IContact = await Contact.create(req.body);
    res.status(201).json(result);
}

export default add;