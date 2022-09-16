import db from "../database/db.js"

async function checkSession(req,res,next){
    const token = res.locals.token
    try{
        const session = await db.collection("sessions").findOne({token: token})

        if(!session) {
            return res.sendStatus(402)
        }
        res.locals.session = session
        next()
    } catch (err){
        console.log(err)
        res.sendStatus(500)
    }
}

export default checkSession