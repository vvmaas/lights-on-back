import { Router } from "express";
import authRouter from "./auth.router.js";
import productsRouter from "./products.router.js";
import cartRouter from "./cart.router.js";

const router = Router()
router.use(authRouter);
router.use(productsRouter);
router.use(cartRouter);

export default router;