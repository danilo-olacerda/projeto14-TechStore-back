import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin.js';
import validateRegister from '../middlewares/validateRegister.js';
import { login, register } from '../controllers/authController.js';

const router = Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

export default router;