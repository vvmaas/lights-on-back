import db from "../database/db.js"
import bcrypt from "bcrypt"

async function checkRegistration(req,res,next) {
    const user = req.body
    res.locals.user = user

    try {
        const registeredUser =  await db.collection("users").findOne({email: user.email})
        res.locals.userRegister = registeredUser
        
        if (registeredUser && bcrypt.compareSync(user.password, registeredUser.password)) {
            next()
        } else {
            return res.sendStatus(401)
        }

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export default checkRegistration