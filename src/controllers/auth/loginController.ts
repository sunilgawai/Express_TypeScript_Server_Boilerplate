import { NextFunction, Request, Response, RequestHandler } from "express";

const loginController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ msg: 'login user...' })
}

export default loginController;