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
});

const Contact = model("contact", contactSchema);

export default Contact;