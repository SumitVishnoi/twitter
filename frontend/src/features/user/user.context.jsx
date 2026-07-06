import { useState } from "react"
import { createContext } from "react"

export const UserContext = createContext()

export const UserProvider = ({children})=> {
    const [loading, setLoading] = useState(false)
    const [allUser, setAllUser] = useState([])
    const [follow, setFollow] = useState(null)
    const [followers, setFollowers] = useState(null)
    const [following, setFollowing] = useState(null)

    return (
        <UserContext.Provider value={{loading, allUser, setAllUser, setLoading, follow, setFollow, followers, setFollowers, following, setFollowing}}>
            {children}
        </UserContext.Provider>
    )
}