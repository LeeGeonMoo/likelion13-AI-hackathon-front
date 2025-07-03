// src/components/ui/badge.jsx
import React from "react";

export function Badge({ className = "", children, ...props }) {
  return (
    <span
      className={`inline-block text-sm px-2 py-1 rounded-full bg-gray-100 text-gray-800 font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
