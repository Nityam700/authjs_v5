import React from "react";

interface Button {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
}

export function Button({ children, type, className }: Button) {
  return (
    <button
      className={`button p-3 rounded-xl font-semibold ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
