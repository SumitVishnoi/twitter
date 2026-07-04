import { useState } from "react";
import FormInput from "../components/FormInput";

// Replace with your real API call
async function register({ username, email, password }) {
  await new Promise((r) => setTimeout(r, 1000));
  if (username.length < 2) throw new Error("Username must be at least 2 characters.");
  if (password.length < 6) throw new Error("Password must be at least 6 characters.");
  return { user: { name: username, email } };
}

function getErrorMessage(error, fallback) {
  return (error && error.message) || fallback;
}

export default function Register({ onSuccess, onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  async function handleRegister({ username, email, password }) {
    setLoading(true);
    try {
      const data = await register({ username, email, password });
      onSuccess?.(data.user);
      return data;
    } catch (error) {
      throw new Error(
        getErrorMessage(error, "We couldn't create your account. Please try again.")
      );
    } finally {
      setLoading(false);
    }
  }

  function validate() {
    const errs = {};
    if (username.trim().length < 2) errs.username = "At least 2 characters.";
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Enter a valid email.";
    if (password.length < 6) errs.password = "At least 6 characters.";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setFormError("");
    if (!validate()) return;
    try {
      await handleRegister({ username, email, password });
    } catch (err) {
      setFormError(err.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl shadow-gray-200/50">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM19 8v6M22 11h-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Create your account</h1>
          <p className="mt-1 text-sm text-gray-500">
            Takes less than a minute. No card required.
          </p>
        </div>

        {formError && (
          <div className="mb-4 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-600">
            {formError}
          </div>
        )}

        <form onSubmit={onSubmit} noValidate>
          <FormInput
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={fieldErrors.username}
            autoComplete="username"
          />
          <FormInput
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={fieldErrors.email}
            autoComplete="email"
          />
          <FormInput
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={fieldErrors.password}
            autoComplete="new-password"
            rightSlot={
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-black active:scale-[0.98] disabled:opacity-60"
          >
            {loading && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            )}
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-700"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}