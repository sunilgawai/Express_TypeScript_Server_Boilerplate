import { NextFunction, Request, Response, RequestHandler } from "express";


const registerController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ msg: 'register user...' })
}


export default registerController;