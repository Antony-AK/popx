import React from "react";

export default function Button({
  text,
  disabled = false,
  variant = "primary",
  onClick,
}) {
  const base =
    "w-full py-3 rounded-md text-sm font-semibold transition-all duration-200";

  const styles = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 active:scale-[0.98]",
    secondary:
      "bg-purple-200  text-black hover:bg-purple-300 active:scale-[0.98]",
    disabled:
      "bg-gray-300 text-gray-500 cursor-not-allowed",
  };

  const finalVariant = disabled ? "disabled" : variant;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${styles[finalVariant]}`}
    >
      {text}
    </button>
  );
}
