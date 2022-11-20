import { Router, IRouter } from "express";
import { loginController, registerController, userController } from "../controllers";

const router: IRouter = Router();


/**
 * Register User.
 */

router.post('/register', registerController);
/**
 * Login User.
 */
router.post('/login', loginController);

/**
 * User Operation Routes.
 */

// Define your routes here....
router.get('/user/profile', userController);



export default router;