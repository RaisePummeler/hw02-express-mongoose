import mongoose, { Schema, model, Document, PostMiddlewareFunction } from "mongoose";
import { RequestError } from "../interfaces";

export interface IContact extends mongoose.Schema {
    name: string,
    email: string,
    phone: string,
    favorite: boolean
}

const contactSchema: Schema<IContact> = new Schema<IContact>({
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
}, {timestamps: true});

const handleErrors = (error: RequestError, data: Document, next: ()=>void) => {
    const { name, code } = error;
    if(name == "MongoServerError" && code == 11000) {
        error.status = 409;
    } else {
        error.status = 400;
    }

    if(error.message.includes("Contact validation failed")) {
        error.message = "missing required name field";
    }

    next();
}

//@ts-ignore
contactSchema.post("save", handleErrors);

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;