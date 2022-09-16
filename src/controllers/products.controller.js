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

    const { keyword } = req.query;
    console.log("chegou aqui")

    try {

        const product =  db
            .collection('products')
            .find({ $text: { $search: keyword } });

        if(!product) {
            return res.sendStatus(404);
        }

        res.status(200).send('OK');
        
    } catch (error) {

        console.log(error.message);
        res.sendStatus(500);

    }
};

export { listProducts, listProduct };