import { createContext, useState } from "react"

export const PostContext = createContext()

export const PostProvider = ({children})=> {
    const [feed, setFeed] = useState(null)
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState(null)
    const [saved, setSaved] = useState(null)
    const [liked, setLiked] = useState(null)

    return (
        <PostContext.Provider value={{liked, setLiked, feed, setFeed, loading, setLoading, post, setPost, saved, setSaved}}>
            {children}
        </PostContext.Provider>
    )
}