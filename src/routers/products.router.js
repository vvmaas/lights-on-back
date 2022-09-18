import express from 'express';
import * as productsController from '../controllers/products.controller.js';
import checkToken from "../middlewares/checkToken.middleware.js"
import checkSession from "../middlewares/checkSession.middleware.js"

const productsRouter = express.Router();

productsRouter.get('/products', checkToken, checkSession, productsController.listProducts);

export default productsRouter;