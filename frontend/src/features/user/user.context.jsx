import { useState } from "react"
import { createContext } from "react"

export const UserContext = createContext()

export const UserProvider = ({children})=> {
    const [loading, setLoading] = useState(false)
    const [follow, setFollow] = useState(null)

    return (
        <UserContext.Provider value={{loading, setLoading, follow, setFollow}}>
            {children}
        </UserContext.Provider>
    )
}