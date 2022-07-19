import books from "../../models/books/index.js";
import Contact from "../../models/contact.js";

const add = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json(result)
}

export default add;