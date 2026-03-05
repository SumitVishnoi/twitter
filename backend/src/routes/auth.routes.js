const express = require("express")
const authController = require("../controllers/auth.controller")
const identifyUser = require("../middlewares/auth.middleware")

const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @description create a new user
 */
authRouter.post("/register", authController.registerUser)

/**
 * @route POST /api/auth/login
 * @description login a user 
 */
authRouter.post("/login", authController.loginUser)

/**
 * @route GET /api/auth/get-me
 * @description get current user
 * @access Private
 */
authRouter.get("/get-me", identifyUser, authController.getMe)

/**
 * @route GET /api/auth/logout
 * @description logout a current login user
 * @access
 */
authRouter.get("/logout", identifyUser, authController.logoutUser)

module.exports = authRouter