import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import { AuthProvider } from "./features/auth/auth.context"
import { PostProvider } from "./features/posts/post.context"
import { UserProvider } from "./features/user/user.context"


function App() {

  return (
    <AuthProvider>
      <PostProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </PostProvider>
    </AuthProvider>
  )
}

export default App
