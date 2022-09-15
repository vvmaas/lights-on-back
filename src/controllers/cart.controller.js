import db from "../database/db.js";

async function getCart(req,res) {

    const session = res.locals.session

    try {
        const cart = await db.collection("cart").find({userId: session.userId}).toArray()
        res.send(cart)
    } catch (error) {
        console.log(err)
        res.sendStatus(401)
    }
}

async function postCartProduct (req,res) {
    const session = res.locals.session
    const newProduct = res.locals.newProduct

    try {
        newProduct.userId = session.userId
        await db.collection("cart").insertOne({
            price: newProduct.price,
            title: newProduct.title,
            description: newProduct.description,
            url: newProduct.url,
            userId: newProduct.userId
        })
        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(401)
    }

}

export {getCart, postCartProduct}