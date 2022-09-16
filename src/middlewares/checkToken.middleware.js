async function checkToken (req,res,next) {
    const {authorization} = req.headers
    const token = authorization?.replace('Bearer ', "")
    const {_id} = req.params

    if(!token) {
        return res.sendStatus(402)
    }

    res.locals.token = token
    res.locals.product = req.body
    res.locals.name = _id

    next()
}

export default checkToken