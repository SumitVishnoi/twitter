const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs");
const likeModel = require("../models/like.model");
const saveModel = require("../models/save.model");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function createPost(req, res) {
    const {caption} = req.body

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: 'Test',
        folder: "twitter"
    })

    if(!file) {
        return res.status(400).json({
            message: "file have not received"
        })
    }

    const post = await postModel.create({
        caption,
        imgUrl: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
}

async function getPosts(req, res) {
    const posts = await postModel.find({
        user: req.user.id
    })

    console.log(posts)
    if(!posts) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })

}

async function getPostDetails(req, res) {
    const userId = req.user.id;
    const postId = req.params.postId;

    const post = await postModel.findById(postId)

    if(!post) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const isValidUser = post.user.toString() === userId
    
    if(!isValidUser) {
        return res.status(403).json({
            message: "Forbidden content"
        })
    }

    res.status(200).json({
        message: "Post fetched successfully",
        post
    })

}

async function getFeed(req, res) {
    const feed = await postModel.find()

    res.status(200).json({
        message: "fetched all feeds",
        feed
    })
}

async function likePost(req, res) {
    const username = req.user.username
    const postId = req.params.postId

    const isPost = await postModel.findById(postId)

    if(!isPost) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const like = await likeModel.create({
        user: username,
        post: postId
    })

    res.status(201).json({
        message: "Post liked successfully",
        like
    })
}

async function unlikePost(req, res) {
    const username = req.user.username
    const postId = req.params.postId

    const isLiked = await likeModel.findOne({
        user: username,
        post: postId
    })

    if(!isLiked) {
        return res.status(400).json({
            message: "Post didn't like"
        })
    }

    await likeModel.findByIdAndDelete({_id: isLiked._id})

    res.status(200).json({
        message: "Post unliked successfully"
    })

}

async function savePost(req, res){
    console.log(req.params.postId)
    const username = req.user.username
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const save = await saveModel.create({
        user: username,
        post: postId
    })

    res.status(201).json({
        message: "Post saved successfully",
        save
    })
}

async function unSavePost(req, res) {
    const username = req.user.username
    const postId = req.params.postId

    const isSaved = await saveModel.findOne({
        user: username,
        post: postId
    })

    if(!isSaved) {
        return res.status(400).json({
            message: "Post didn't save"
        })
    }

    await saveModel.findOneAndDelete({
        user: username,
        post: postId
    })

    res.status(200).json({
        message: "Post unsaved successfully"
    })
}

module.exports = {
    createPost,
    getPosts,
    getPostDetails,
    getFeed,
    likePost,
    unlikePost,
    savePost,
    unSavePost
}