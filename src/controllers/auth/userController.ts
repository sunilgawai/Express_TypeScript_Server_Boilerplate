import { NextFunction, Request, Response, RequestHandler } from "express";

const userController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ msg: 'user...' })
}

export default userController;