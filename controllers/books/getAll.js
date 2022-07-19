import books from "../../models/books/index.js";

const getAll = async (req, res) => {
    const result = await books.getAll();
    res.json(result);
}

export default getAll;