import { Router } from "express";
import adminRouter from "./adminRouter.js";
import authRouter from "./authRouter.js";
import inventoryRouter from "./iventoryRouter.js";
import sessionRouter from "./sessionRouter.js";

const router = Router();
router.use(authRouter);
router.use(inventoryRouter);
router.use(adminRouter);
router.use(sessionRouter);

export default router;