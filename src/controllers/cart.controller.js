import db from "../database/db.js";
import {ObjectId} from 'mongodb'


async function getCart(req,res) {

    const session = res.locals.session

    try {
        const cart = await db.collection("cart").find({userId: session.userId}).toArray()
        res.send(cart)
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }
}

async function postCartProduct (req,res) {
    const session = res.locals.session
    const newProduct = res.locals.product

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

async function deleteCartProduct (req,res) {
    const target = res.locals.name

    try {
        await db.collection("cart").deleteOne({_id: new ObjectId(target)})

        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(401)
    }

}

async function deleteCart (req,res) {
    const session = res.locals.session

    try {
        const soldItens = await db.collection("cart").find({userId: session.userId}).toArray()

        await db.collection("sellings").insertOne({
            userId: session.userId,
            itens: soldItens
        })

        await db.collection("cart").deleteMany({userId: session.userId})

        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(401)
    }

}

export {getCart, postCartProduct, deleteCartProduct, deleteCart}