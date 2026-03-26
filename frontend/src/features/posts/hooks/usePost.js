import { useContext } from "react"
import { PostContext } from "../post.context"
import { getFeed, getLikePost, getPost, getSavePost} from "../services/post.api"


export const usePost = ()=> {
    const context = useContext(PostContext)
    const {post, setPost, feed, setFeed, loading, setLoading, saved, setSaved, liked, setLiked} = context


    async function handleGetPost() {
        setLoading(true)
        try {
            const data = await getPost()
            setPost(data.posts)
        } catch (error) {
            throw new Error("Fetching posts error", error)
        } finally {
            setLoading(false)
        }
    }

    async function handleGetFeed() {
        setLoading(true)
        try {
            const data = await getFeed()
            setFeed(data.feed)
        } catch (error) {
            throw new Error("fetching feed error", error)
        } finally {
            setLoading(false)
        }
    }

    async function handleGetSavedPosts() {
        setLoading(true)
        try {
            const data = await getSavePost()
            setSaved(data?.saved)
        } catch (error) {
            throw new Error("fetching save posts error", error)
        } finally {
            setLoading(false)
        }
    }

    async function handleGetLikePosts(){
        setLoading(true)
        try {
            const data = await getLikePost()
            setLiked(data.liked)
        } catch (error) {
            throw new Error("fetching like posts error", error)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, post, handleGetPost, handleGetFeed, feed, saved, handleGetSavedPosts, handleGetLikePosts, liked
    }
}