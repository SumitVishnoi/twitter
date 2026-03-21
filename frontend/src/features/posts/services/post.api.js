import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})


export async function createPost({caption, image}) {
    const response = await api.post("/api/posts", {caption, image})
    return response.data
}

export async function getPost() {
    const response = await api.get("/api/posts/")
    return response.data
}

export async function getPostDetails({postId}) {
    const response = await api.get(`/api/posts/details/${postId}`)
    return response.data
}

export async function getFeed() {
    const response = await api.get("/api/posts/feed") 
    return response.data
}