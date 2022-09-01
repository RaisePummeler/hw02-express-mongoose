const ctrlWrapper = (ctrl) => {
    const func = async(req, res, next) => {
        try {
            await ctrl(req, res, next)
        } catch (error) {
            if(error.message.includes("validation")) {
                error.status = 400; 
            }
            next(error);
        }
    };

    return func;
}

export default ctrlWrapper;