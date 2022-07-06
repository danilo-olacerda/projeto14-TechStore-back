import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import validateRegister from '../middlewares/validateRegister';
import { login, register } from '../controllers/authController';

const router = Router();

router.post('register', validateRegister, register);
router.post('login', validateLogin, login);

export default router;