import books from "../../models/books/index.js";

const add = async (req, res) => {
    const result = await books.add(req.body);
    res.status(201).json(result)
}

export default add;