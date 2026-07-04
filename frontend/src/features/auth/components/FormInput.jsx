import { useState } from "react";

export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
  rightSlot,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div
        className={`flex items-center rounded-xl border bg-white px-4 transition-all duration-200 ${
          error
            ? "border-red-400 ring-2 ring-red-100"
            : focused
            ? "border-gray-900 ring-2 ring-gray-100"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent py-3 text-sm text-gray-900 placeholder-gray-400 outline-none"
        />
        {rightSlot}
      </div>
      <p
        className={`mt-1 text-xs text-red-500 transition-opacity duration-150 ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        {error || " "}
      </p>
    </div>
  );
}