const express = require("express")
const identifyUser = require("../middlewares/auth.middleware")
const postController = require("../controllers/post.controller")
const multer = require("multer")

const postRouter = express.Router()

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

/**
 * @route POST /api/posts/
 * @description create a new post
 * @access Private
 */
postRouter.post("/", identifyUser,upload.single("image"), postController.createPost)

/**
 * @route GET /api/posts/
 * @description get all posts created by login user
 * @access Private
 */
postRouter.get("/", identifyUser, postController.getPosts)

/**
 * @route GET /api/posts/detials/:postId
 * @description get post details 
 * @access Private
 */
postRouter.get("/details/:postId",identifyUser, postController.getPostDetails)

/**
 * @route GET /api/posts/feed
 * @description fetch all feed 
 */
postRouter.get("/feed", postController.getFeed)


/**
 * @route POST /api/posts/like/:postId
 * @description like a post
 * @access Private
 */
postRouter.post("/like/:postId",identifyUser, postController.likePost)

/**
 * @route POST /api/posts/unlike/:postId
 * @description unlike a post
 * @access Private
 */
postRouter.post("/unlike/:postId", identifyUser, postController.unlikePost)

/**
 * @route POST /api/posts/save/:postId
 * @description save a post
 * @access Private
 */
postRouter.post("/save/:postId", identifyUser, postController.savePost)

/**
 * @route POST /api/posts/unsave/:postId
 * @description delete the save post or unsave post
 * @access Private
 */
postRouter.post("/unsave/:postId", identifyUser, postController.unSavePost)




module.exports = postRouter