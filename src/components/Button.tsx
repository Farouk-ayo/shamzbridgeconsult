import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  onClick,
}) => {
  // Determine button size based on the "size" prop
  const sizeClass = {
    small: "px-3 py-2 text-sm",
    medium: "px-5 py-3 text-base",
    large: "px-6 py-4 text-lg",
  };

  return (
    <button
      className={`bg-primary text-white ${sizeClass[size]} rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary w-40 self-center transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
