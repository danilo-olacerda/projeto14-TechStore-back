import { Router } from 'express';
import { buy, userbuys } from '../controllers/buyController.js';
import validateBuy from '../middlewares/validateBuy.js';
import validateUserSession from '../middlewares/validadeUserSession.js';

const router = Router();

router.post('/buy', validateBuy, buy);
router.get('/userbuys', validateUserSession, userbuys);

export default router;