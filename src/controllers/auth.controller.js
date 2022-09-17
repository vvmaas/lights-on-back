import db from "../database/db.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from 'uuid'

async function signIn(req,res) {
    const user = res.locals.user
    const userRegister = res.locals.userRegister
    const token = uuid()

    try{
        await db.collection("sessions").insertOne({
            userId: userRegister._id,                
            token: token
        })   
        res.send({
            name: userRegister.name,
            email: user.email,
            token: token
        })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
} 

async function signUp(req,res)  {
    const user = res.locals.user

    try {
        const hashedPassword = bcrypt.hashSync(user.password, 10)
        await db.collection("users").insertOne({
            name: user.name,
            email: user.email,
            password: hashedPassword,
        })
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

async function logout(req, res) {

    const token = res.locals.token

    try {

        await db.collection('sessions').deleteOne({token});

        res.sendStatus(200);

    } catch (err) {

        console.log(err)
        res.sendStatus(500)
    }

}

export { signIn, signUp, logout }
