import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  layout?: "horizontal" | "stacked";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  size = "md",
  layout = "horizontal",
}) => {
  const isDark = variant === "dark";

  // Height configurations for optimal navigation fit
  const markHeight = {
    sm: "h-8 sm:h-9",
    md: "h-11 sm:h-12",
    lg: "h-14 sm:h-16",
  };

  const textSizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-2xl sm:text-3xl",
  };

  if (layout === "stacked") {
    const stackedHeight = {
      sm: "h-12",
      md: "h-16 sm:h-20",
      lg: "h-24 sm:h-28",
    };

    return (
      <Link href="/" className="group inline-flex items-center transition-transform hover:scale-[1.02]">
        <img
          src="/logo.png"
          alt="Nivi Art Hub Official Logo"
          className={`${stackedHeight[size]} w-auto object-contain drop-shadow-sm`}
        />
      </Link>
    );
  }

  // Horizontal layout: Symbol Mark on left + Crisp Typography on right
  return (
    <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
      <div className={`relative flex items-center shrink-0 ${markHeight[size]}`}>
        <img
          src="/logo_mark.png"
          alt="Nivi Art Hub Icon"
          className="h-full w-auto object-contain drop-shadow-sm"
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className={`font-extrabold tracking-tight leading-none font-poppins ${textSizes[size]}`}>
          <span className={isDark ? "text-white" : "text-gray-900"}>
            NIVI ART HUB
          </span>
        </div>
        <span
          className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-bold mt-1 ${
            isDark ? "text-gray-400" : "text-[#FF7A00]"
          }`}
        >
          Handcrafted Heritage Studio
        </span>
      </div>
    </Link>
  );
};
