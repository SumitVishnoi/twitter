import { useContext, useEffect } from "react"
import { AuthContext } from "../auth.context"
import { getMe, login, logout, register } from "../services/atuh.api"



export const useAuth = ()=> {
    const context = useContext(AuthContext)

    console.log("loading", context)

    const {loading, setLoading, user, setUser} = context

     async function handleRegister({username, email, password}) {
         setLoading(true)
         try {
            const data = await register({username, email, password})
            setUser(data.user)
        } catch (error) {
            throw new Error("Error registering in user", error)
        } finally {
            setLoading(false)
        }
     }

     async function handleLogin({email, password}) {
        setLoading(true)
        try {
            const data = await login({email, password})
            setUser(data.user)
        } catch (error) {
            throw new Error("Error logging in user", error)
        } finally {
            setLoading(false)
        }
     }

     async function handleGetMe() {
         try {
            setLoading(true)
            const data = await getMe()
            setUser(data.user)
        } catch (error) {
            throw new Error("Error getting current user", error)
        } finally {
            setLoading(false)
        }
     }

     async function handleLogout() {
        setLoading(true)
        try {
            const data = await logout()
            setUser(null)
        } catch (error) {
            throw new Error("Error logging out user", error)
        } finally {
            setLoading(false)
        }
     }

     useEffect(()=> {
        handleGetMe()
     }, [])

    return {
        loading,
        user,
        handleRegister,
        handleLogin,
        handleGetMe,
        handleLogout
    }
}