const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "username already exists"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email already exists"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        select: false
    },
    bio: {
        type: String,
        default: ""
    },
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/coders11/default-avatar-profile-icon-social-600nw-1906669723.webp?updatedAt=1770803075970"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel