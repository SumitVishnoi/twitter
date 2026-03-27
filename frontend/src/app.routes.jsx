import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Home from "./features/posts/pages/Home";
import Protected from "./features/auth/components/Protected";
import Profile from "./features/user/pages/Profile";
import Dashboard from "./features/chat/pages/Dashboard";
import Follow from "./features/user/pages/Follow";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/follow",
    element: <Follow />
  }
]);
