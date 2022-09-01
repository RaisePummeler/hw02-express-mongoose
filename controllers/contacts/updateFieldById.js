import Contact from "../../models/contact.js";

import { createError } from "../../helpers/index.js";

const updateFieldById = async (req, res) => {
    if (!Object.keys(req.body).includes("favorite")) {
        throw createError(400, "missing field favorite");
    }
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate({_id: id}, req.body, {new: true});
    if (!result) {
        throw createError(404, "Not found")
    }
    res.status(200).json(result);
}

export default updateFieldById;