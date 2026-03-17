import { createContext, useState } from "react"
import { FaBullseye } from "react-icons/fa"

export const AuthContext = createContext()

export const AuthProvider = ({children})=> {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{loading, setLoading, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}