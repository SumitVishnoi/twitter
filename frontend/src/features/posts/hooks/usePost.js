import { useContext } from "react"
import { PostContext } from "../post.context"
import { getFeed } from "../services/post.api"



export const usePost = ()=> {
    const context = useContext(PostContext)
    const {feed, setFeed, loading, setLoading} = context

    async function handleGetFeed() {
        setLoading(true)
        try {
            const data = await getFeed()
            console.log(data)
            setFeed(data.feed)
        } catch (error) {
            throw new Error("fetching feed error", error)
        }
        finally {
            setLoading(false)
        }
    } 

    return {
        loading, handleGetFeed, feed
    }
}