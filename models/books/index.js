import fs from "fs/promises";
import {nanoid} from "nanoid";
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filePath = `${__dirname}/books.json`;

const updateBooks = async (books) => {
    await fs.writeFile(filePath, JSON.stringify(books, null, 2));
}

const getAll = async()=> {
    const result = await fs.readFile(filePath);
    return JSON.parse(result);
}

const getById = async (id) => {
    const books = await getAll();
    const result = books.find(item => item.id === id);
    if(!result){
        return null;
    }
    return result;
}

const add = async(data) => {
    const books = await getAll();
    const newBook = {
        ...data,
        id: nanoid()
    };
    books.push(newBook);
    await updateBooks(books);
    return newBook;
}

const updateById = async(id, {title, author}) => {
    const books = await getAll();
    const idx = books.findIndex(item => item.id === id);
    console.log(id);
    if(idx === -1){
        return null;
    }
    books[idx] = {id, title, author};
    await updateBooks(books);
    return books[idx];
}

const removeById = async(id) => {
    const books = await getAll();
    const idx = books.findIndex(item => item.id !== id);
    if(idx === -1){
        return null;
    }
    const [result] = books.splice(idx, 1);
    await updateBooks(books);
    return result;
}

export default {
    getAll,
    getById,
    add, 
    updateById,
    removeById,
}