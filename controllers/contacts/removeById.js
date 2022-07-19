import Contact from "../../models/contact.js";

import { createError } from "../../helpers/index.js";

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.remove({ _id: id });
    if (!result) {
        throw createError(404, "Not found")
    }
    res.status(204).json({
        message: "Delete success"
    })
}

export default removeById;