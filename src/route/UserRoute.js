import { Router } from "express";
import { registerUser } from '../controller/UserController.js';

const userRouter = Router();
userRouter.route("/register").post(registerUser);

export { userRouter };

