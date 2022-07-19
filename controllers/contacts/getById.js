import books from "../../models/books/index.js";

import { createError } from "../../helpers/index.js";

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await books.getById(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default getById;