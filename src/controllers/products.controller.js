import db from '../database/db.js';

const listProducts = async (req, res) => {

    const { keyword } = req.query;

    try {

        if ( keyword ) {

            const products =  await db
            .collection('products')
            .find({ $text: { $search: keyword } })
            .toArray();

            if (products.length === 0) {
                return res.sendStatus(404);
            }

            return res.status(200).send(products);
        }
        
        const products = await db.collection('products').find().toArray();

        res.status(200).send(products);
        
    } catch (error) {

        console.log(error.message);
        res.sendStatus(500);

    }
};


export { listProducts };