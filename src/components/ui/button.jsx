// src/components/ui/button.jsx
import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-blue-500  rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
