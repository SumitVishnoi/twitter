const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")


async function followUser(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isFollowee = await userModel.findOne({
        username: followeeUsername
    })

    if(!isFollowee) {
        return res.status(404).json({
            message: `You are trying to follow doesn't exist`
        })
    }

    const isFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if(isFollowing) {
        return res.status(400).json({
            message: `You are already following ${followeeUsername}`
        })
    }

    if(followeeUsername === followerUsername) {
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }


    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })

    res.status(201).json({
        message: "following successfully",
        follow: followRecord
    })
}

async function getFollowers(req, res) {
    const followeeUsername = req.params.username

    const followers = await followModel.find({
        followee: followeeUsername 
    })

    if(!followers) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    res.status(200).json({
        message: "fetched followers successfully",
        followers
    })
}

async function getFollowing(req, res) {
    const followerUsername = req.user.username

    const following = await followModel.find({
        follower: followerUsername
    })

    if(!following) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    res.status(200).json({
        message: "fetched following successfully",
        following
    })
}   

async function unFollowUser(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if(!isFollowing) {
        return res.status(404).json({
            message: "You do not follow"
        })
    }

    await followModel.findOneAndDelete({
        follower: followerUsername,
        followee: followeeUsername
    })

    res.status(200).json({
        message: "unfollow successfully"
    })
}

async function getAllUser(req, res) {
    const username = req.user.username
    const allUsers = await userModel.find({
        username: {$ne: username}
    }).select("-password")

    res.status(200).json({
        message: "fetched all users",
        allUsers
    })
}

module.exports = {
    followUser,
    unFollowUser,
    getFollowers,
    getFollowing,
    getAllUser
}