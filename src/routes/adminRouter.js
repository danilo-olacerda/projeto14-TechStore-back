import { Router } from "express";
import { addItem } from "../controllers/adminController.js";
import validateAdmin from "../middlewares/validateAdmin.js";

const adminRouter = Router();

adminRouter.post('/admin' ,validateAdmin ,addItem);

export default adminRouter;