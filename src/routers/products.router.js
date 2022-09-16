import express from 'express';
import * as productsController from '../controllers/products.controller.js';

const productsRouter = express.Router();

productsRouter.get('/products', productsController.listProducts);
productsRouter.get('/products/:PRODUCT_ID', productsController.listProduct);

export default productsRouter;