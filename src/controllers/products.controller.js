import { ObjectId } from 'mongodb';
import db from '../database/db.js';

const listProducts = async (req, res) => {

    try {

        const products = await db.collection('products').find().toArray();

        res.status(200).send(products);
        
    } catch (error) {

        console.log(error.message);
        res.sendStatus(500);

    }
};

const listProduct = async (req, res) => {

    const { PRODUCT_ID } = req.params;
    console.log(req.params);

    try {

        const product = await db
            .collection('products')
            .findOne({"_id": ObjectId(PRODUCT_ID)});

        if(!product) {
            return res.sendStatus(404);
        }

        res.status(200).send(product);
        
    } catch (error) {

        console.log(error.message);
        res.sendStatus(500);

    }
};

export { listProducts, listProduct };