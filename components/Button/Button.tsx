import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => (
  <button
    onClick={onClick}
    type="button"
    className={`text-black hover:text-white border-2 border-pink-500 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-bold rounded-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:hover:bg-pink-600 dark:focus:ring-pink-800 transition duration-500 ${className}`}
  >
    {children}
  </button>
);
