import { Router } from "express";
import {signIn, signUp} from "../controllers/auth.controller.js"
import checkRegistration from "../middlewares/checkRegistration.middleware.js"
import checkAvailability from "../middlewares/checkAvailability.middleware.js"

const authRouter = Router()
authRouter.post("/sign-in", checkRegistration, signIn)
authRouter.post("/sign-up", checkAvailability, signUp)

export default authRouter