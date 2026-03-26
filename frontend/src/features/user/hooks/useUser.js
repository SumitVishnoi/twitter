import { useContext } from "react"
import { UserContext } from "../user.context"
import { followUser, getFollowers, getFollowing, unFollowUser } from "../services/user.api"


export const useUser = ()=> {
    const context = useContext(UserContext)

    const {loading, setLoading, follow, setFollow, followers, setFollowers, following, setFollowing} = context

    async function handleFollow({username}) {
        setLoading(true)
        try {
            const data = await followUser({username})
            console.log(data)
            setFollow(data)
        } catch (error) {
            throw new Error("User following error ", error)
        } finally {
            setLoading(false)
        }
    }

    async function handleUnFollow({username}) {
        setLoading(true)
        try {
            const data = await unFollowUser({username})
            setFollow(data)
        } catch (error) {
            throw new Error("User unfollow error ", error)
        } finally {
            setLoading(false)
        }
    }

    async function handleGetFollowers({username}) {
        setLoading(true)
        try {
            const data = await getFollowers({username})
            setFollowers(data.followers)
        } catch (error) {
            throw new Error("User get followers error ", error)
        } finally {
            setLoading(false)
        }
    }
    async function handleGetFollowing({username}) {
        setLoading(true)
        try {
            const data = await getFollowing({username})
            setFollowing(data.following)
        } catch (error) {
            throw new Error("User get following error ", error)
        } finally {
            setLoading(false)
        }
    }
    return {
        loading, follow, followers, following, handleFollow, handleUnFollow, handleGetFollowers, handleGetFollowing
    }
}