import { NextFunction } from "express"

const userController = {
    async login(req: Request, res: Response, next: NextFunction) {
        // return res.status(200).json({msg: 'register user...'})
    }
}

export default userController;