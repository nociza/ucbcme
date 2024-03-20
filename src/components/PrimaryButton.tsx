import React from "react";

interface PrimaryButtonProps {
  buttonText: string | undefined;
  type: "button" | "submit";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  as?: "button" | "a";
  size?: "max-w-sm" | "max-w-md" | "max-w-lg" | "max-w-xl";
}

export default function PrimaryButton({
  buttonText,
  type,
  onClick,
  disabled,
  size,
}: PrimaryButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`relative w-full px-3 py-2 overflow-hidden text-base font-bold transition-all duration-300 ease-linear bg-white border-2 border-black outline-none rounded-xl hover:shadow-none focus-within:shadow-none hover:bg-black hover:text-white shadow-deep focus:bg-green-light disabled:bg-green-light disabled:shadow-none disabled:pointer-events-none focus-within:text-black focus:ring-4 focus:ring-secondary-light ${size}`}
    >
      {buttonText}
    </button>
  );
}
