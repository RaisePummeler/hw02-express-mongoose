import books from "../../models/books/index.js";

import { createError } from "../../helpers/index.js";

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await books.updateById(id, req.body);
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default updateById;