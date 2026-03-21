import { createContext, useState } from "react"

export const PostContext = createContext()

export const PostProvider = ({children})=> {
    const [feed, setFeed] = useState(null)
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState(null)

    return (
        <PostContext.Provider value={{feed, setFeed, loading, setLoading, post, setPost}}>
            {children}
        </PostContext.Provider>
    )
}