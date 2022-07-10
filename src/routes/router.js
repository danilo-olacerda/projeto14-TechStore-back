import { Router } from "express";
import adminRouter from "./adminRouter.js";
import authRouter from "./authRouter.js";
import inventoryRouter from "./iventoryRouter.js";
import sessionRouter from "./sessionRouter.js";
import buyRouter from "./buyRouter.js";

const router = Router();
router.use(authRouter);
router.use(inventoryRouter);
router.use(adminRouter);
router.use(sessionRouter);
router.use(buyRouter);

export default router;