import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import { AuthProvider } from "./features/auth/auth.context"
// import { useEffect } from "react"
// import { useAuth } from "./features/auth/hooks/useAuth"


function App() {
  // const auth = useAuth()

  // useEffect(()=> {
  //   auth.handleGetMe()
  // }, [])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
