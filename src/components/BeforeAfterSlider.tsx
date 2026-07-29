"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Raw Family Portrait Photo",
  afterLabel = "Hand-Stitched Silk Garland Embroidery Frame",
  title,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FF7A00]/10 text-[#FF7A00] mb-2 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Handcraft Transformation
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-poppins">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Drag the interactive slider left or right to see the craft transformation magic
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative h-[340px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 cursor-ew-resize select-none touch-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After Image (Full width background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-extrabold px-4 py-2 rounded-full border border-white/20 shadow-lg z-10">
            ✨ {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped overlay width) */}
        <div
          className="absolute inset-0 h-full overflow-hidden border-r-4 border-white shadow-2xl transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[320px] sm:min-w-[768px]">
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-extrabold px-4 py-2 rounded-full border border-white/20 shadow-lg z-10">
            🖼️ {beforeLabel}
          </div>
        </div>

        {/* Central Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-r from-[#FF7A00] via-[#E91E63] to-[#6D3AFF] text-white flex items-center justify-center shadow-2xl border-2 border-white transform hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
