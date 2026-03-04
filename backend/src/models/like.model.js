const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "user id is required for like the post"]
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: [true, "post id required for like the post"]
    }
}, {
    timestamps: true
})

const likeModel = mongoose.model("likes", likeSchema)

module.exports = likeModel