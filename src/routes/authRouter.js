import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin.js';
import validateRegister from '../middlewares/validateRegister.js';
import { login, register } from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/register', validateRegister, register);
authRouter.post('/login', validateLogin, login);

export default authRouter;