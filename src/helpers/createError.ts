import { RequestError } from "../interfaces";

interface ErrorMessages {
    [index: number]: string
}
const messages: ErrorMessages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict"
}

const createError = (status: number, message: string = messages[status]): RequestError => {
    const error = new RequestError(message);
    error.status = status;
    return error;
}

export default createError;