import db from "../database/db.js"

async function checkUser(req,res,next) {
    const session = res.locals.session
    try{
        const user = await db.collection("users").findOne({
            _id: session.userId
        })

        if (user){
            next()
        } else {
            return res.sendStatus(402)
        }
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export default checkUser