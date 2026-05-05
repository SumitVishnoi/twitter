import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin({ email, password });
    navigate("/");
  };

  if (loading) {
    return (
      <main>
        <h1>loading...</h1>
      </main>
    );
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            onInput={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-zinc-200 text-black outline-none p-3 w-95 rounded placeholder:text-zinc-500"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
          <input
            onInput={(e) => setPassword(e.target.value)}
            value={password}
            className="bg-zinc-200 text-black outline-none p-3 w-95 rounded placeholder:text-zinc-500"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <button className="bg-zinc-900 text-white font-medium p-3 rounded-md active:scale-95 cursor-pointer">
            Login
          </button>
        </form>
        <p>
          Don't have an account ?{" "}
          <Link to="/register" className="text-blue-800">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
