import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import React from "react";

/* PrimaryButton contains a great deal of animations, all of which aid in drawing attention to our call to actions. This button is used for things like donating, sending forms, and otherwise exists at the end point of where we want someone to interact. In previous version of this button, the animation was all done with a lottie file; however, it meant any interaction or changes needed to be made to the animation required a great deal of effort. Here, each part of the animation is independently animated and open to adjustment. */

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
