"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles, Palette } from "lucide-react";
import { ARTWORKS } from "@/data/siteData";
import { MasonryGallery } from "@/components/MasonryGallery";

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold uppercase tracking-wider">
          <Palette className="w-3.5 h-3.5" /> Handcrafted Masterpieces
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-gray-900">
          Art Gallery & Collections
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Explore our handcrafted miniature frames, custom portraits, Lippan mirror art, string art, name boards, and personalized gift hampers. Click any artwork to view details or commission custom sizing.
        </p>
      </div>

      {/* Masonry Grid with Search & Filters */}
      <MasonryGallery artworks={ARTWORKS} showSearch={true} showFilters={true} />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-500 font-medium">
          <Sparkles className="w-5 h-5 text-[#FF7A00] animate-spin" />
          <span>Loading Art Gallery...</span>
        </div>
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
