import express from "express"
import { loginUser,registerUser } from "../controllers/userController.js"

const usetRouter = express.Router()

usetRouter.post("/register",registerUser)
usetRouter.post("/login",loginUser)

export default usetRouter;