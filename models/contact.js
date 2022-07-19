import mongoose from "mongoose";

const { Schema, model } = mongoose;

const contactSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    favorite: {
        type: Boolean,
        required: false,
        default: false
    },
}, {verstionKey: false, timestamps: true});

const handleErrors = (error, data, next) => {
    const { name, code } = error;
    if(name == "MongoServerError" && code == 11000) {
        error.status = 409;
    } else {
        error.status = 400;
    }

    if(error.message.includes("contact validation failed")) {
        error.message = "missing required name field";
    }

    next();
}

contactSchema.post("save", handleErrors);

const Contact = model("contact", contactSchema, "contacts");

export default Contact;