import React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      {...props}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl shadow ${className}`}
    >
      {children}
    </button>
  );
}
