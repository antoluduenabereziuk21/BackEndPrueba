const {exceptionType} = require("./exceptions");

class AppError extends Error {
    constructor(exceptionType, description,errorDetails) {
        super()
        Error.captureStackTrace(this, this.constructor)

        this.appCode = exceptionType.code
        this.message = exceptionType.message
        this.httpStatus = exceptionType.httpStatus
        if(description) this.description = description
        if(errorDetails) this.errorDetails = errorDetails
    }
}

const errorHandler = (res, ex) =>{
    if(!(ex instanceof AppError)){

        if(ex.httpStatus === 404){
            ex = new AppError(exceptionType.notFound)
        }else{
            //unhandled excetion 
            ex = new AppError(exceptionType.unhandledException,ex.message)
        }
    }
    const status = ex.httpStatus
    delete ex.httpStatus
    res.status(status).json(ex)
}

module.exports = {
    errorHandler,
    AppError
}