import { Router } from 'express';
import { buy } from '../controllers/buyController.js';
import validateBuy from '../middlewares/validateBuy.js';

const router = Router();

router.post('/buy', validateBuy, buy);

export default router;