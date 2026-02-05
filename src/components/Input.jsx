import React from "react";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  error
}) {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className={`
          peer w-full border rounded-md px-3 py-3 text-sm
          focus:outline-none
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-purple-600"
          }
        `}
      />

      <label
        className={`
          absolute left-3 bg-white px-1.5
          transition-all duration-200
          ${
            value
              ? "-top-2 text-xs text-purple-600"
              : "top-4 text-sm text-gray-400"
          }
          peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-600
        `}
      >
        {label}
      </label>

      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
