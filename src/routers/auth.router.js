import { Router } from "express";
import {signIn, signUp, logout} from "../controllers/auth.controller.js";
import checkRegistration from "../middlewares/checkRegistration.middleware.js";
import checkAvailability from "../middlewares/checkAvailability.middleware.js";
import checkToken from "../middlewares/checkToken.middleware.js";
import checkSession from "../middlewares/checkSession.middleware.js";

const authRouter = Router()
authRouter.post("/sign-in", checkRegistration, signIn)
authRouter.post("/sign-up", checkAvailability, signUp)
authRouter.delete("/logout", checkToken, checkSession,logout)

export default authRouter