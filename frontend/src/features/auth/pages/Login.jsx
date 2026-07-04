import { useState } from "react";
import FormInput from "../components/FormInput";

// Replace with your real API call
async function login({ email, password }) {
  await new Promise((r) => setTimeout(r, 1000));
  if (password.length < 6) throw new Error("Incorrect email or password.");
  return { user: { name: email.split("@")[0], email } };
}

function getErrorMessage(error, fallback) {
  return (error && error.message) || fallback;
}

export default function Login({ onSuccess, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  async function handleLogin({ email, password }) {
    setLoading(true);
    try {
      const data = await login({ email, password });
      onSuccess?.(data.user);
      return data;
    } catch (error) {
      throw new Error(getErrorMessage(error, "We couldn't sign you in. Please try again."));
    } finally {
      setLoading(false);
    }
  }

  function validate() {
    const errs = {};
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
      await handleLogin({ email, password });
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM8 11V7a4 4 0 118 0v4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Welcome back</h1>
          <p className="mt-1 text-sm text-gray-500">
            Sign in to continue to your account.
          </p>
        </div>

        {formError && (
          <div className="mb-4 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-600">
            {formError}
          </div>
        )}

        <form onSubmit={onSubmit} noValidate>
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
            autoComplete="current-password"
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

          <div className="mb-5 flex justify-end">
            <button type="button" className="text-xs font-medium text-gray-500 hover:text-gray-900">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-black active:scale-[0.98] disabled:opacity-60"
          >
            {loading && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            )}
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToRegister}
            className="font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-700"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}