import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { getMe, login, register, logout } from "../services/atuh.api";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const { loading, setLoading, user, setUser } = context;

  async function handleRegister({ username, email, password }) {
    setLoading(true);
    try {
      const data = await register({ username, email, password });
      setUser(data.user);
      return data;
    } catch (error) {
      throw new Error(
        "We couldn't create your account. Please try again.",
        error,
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin({ email, password }) {
    setLoading(true);
    try {
      const data = await login({ email, password });
      setUser(data.user);
      return data;
    } catch (error) {
      throw new Error(error, "We couldn't sign you in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGetMe() {
    try {
      setLoading(true);
      const data = await getMe();
      setUser(data.user);
    } catch (error) {
      throw new Error("Error getting current user", error);
    } finally {
      setLoading(false);
    }
  }

    async function handleLogout() {
      setLoading(true);
      try {
        const data = await logout();
        setUser(null);
      } catch (error) {
        throw new Error("Error logging out user", error);
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    loading,
    user,
    handleRegister,
    handleLogin,
    handleGetMe,
    handleLogout
  };
};
