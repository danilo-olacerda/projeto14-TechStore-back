import {Router} from 'express';
import { getName,deleteUser } from '../controllers/sessionController.js';

const sessionRouter = Router();
sessionRouter.get('/session', getName);
sessionRouter.delete('/session', deleteUser);

export default sessionRouter;
