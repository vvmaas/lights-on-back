import { Router } from "express";
import authRouter from "./auth.router.js";
import productsRouter from "./products.router.js";
;
const router = Router()
router.use(authRouter);
router.use(productsRouter);

export default router;