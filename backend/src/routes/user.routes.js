const express = require("express")
const identifyUser = require("../middlewares/auth.middleware")
const userController = require("../controllers/user.controller")

const userRouter = express.Router()

/**
 * @route POST /api/users/follow/:username
 * @description follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyUser, userController.followUser)

/**
 * @route POST /api/users/unfollow/:username
 * @description unfollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", identifyUser, userController.unFollowUser)

module.exports = userRouter