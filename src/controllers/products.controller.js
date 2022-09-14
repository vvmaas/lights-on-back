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

export { listProducts };