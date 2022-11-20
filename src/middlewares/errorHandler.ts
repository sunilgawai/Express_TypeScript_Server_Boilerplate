import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { ValidationError } from "joi";
import { DEBUG_MODE } from "../../config";
import { CustomErrorHandler } from "../services";

const errorHandler: ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // code goes here....
    let statusCode: number = 500;
    let data = {
        message: "Internal Server Error",
        ...(DEBUG_MODE === 'true' && { originalError: err.message})
    }

    // Check Joi Error Instance.
    if(err instanceof ValidationError) {
        statusCode = 422;
        data = {
            message: err.message
        }
    }

    // Check Customer Error Instance.
    if(err instanceof CustomErrorHandler) {
        statusCode = err.status;
        data = {
            message: err.message
        }
    }

    // return Error.
    return res.status(statusCode).json(data);
}

export default errorHandler;