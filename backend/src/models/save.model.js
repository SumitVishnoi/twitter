const mongoose = require("mongoose")

const saveSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "user is required for saving the post"]
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: [true, "post id is required for saving the post"]
    },
}, {
    timestamps: true
})

const saveModel = mongoose.model("saves", saveSchema)

module.exports = saveModel