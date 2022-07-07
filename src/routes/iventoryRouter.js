import {Router} from 'express';
import { listItens } from '../controllers/iventoryController.js';

const inventoryRouter = Router();

inventoryRouter.get('/inventory', listItens);

export default inventoryRouter;