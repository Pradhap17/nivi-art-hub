"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, Eye, Sparkles, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { Artwork, CATEGORIES } from "@/data/siteData";
import { GalleryModal } from "./GalleryModal";

interface MasonryGalleryProps {
  artworks: Artwork[];
  showSearch?: boolean;
  showFilters?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 15,
    transition: { duration: 0.2 },
  },
};

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  artworks,
  showSearch = true,
  showFilters = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  // Compute count of items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: artworks.length };
    artworks.forEach((art) => {
      counts[art.category] = (counts[art.category] || 0) + 1;
    });
    return counts;
  }, [artworks]);

  const filteredArtworks = useMemo(() => {
    return artworks.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [artworks, selectedCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Search & Animated Perfectly-Aligned Category Filter Tabs */}
      {(showSearch || showFilters) && (
        <div className="mb-12 space-y-6">
          {/* Search Input Bar */}
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative max-w-xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by artwork name, category, or detail..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/90 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 shadow-sm text-sm transition-all"
              />
            </motion.div>
          )}

          {/* Perfectly Aligned Responsive Category Filter Box */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-3 sm:p-4 border border-gray-200/80 shadow-md max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-between px-2 mb-3 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#E91E63]">
                  <SlidersHorizontal className="w-4 h-4 text-[#FF7A00]" />
                  <span>Art Collections & Categories</span>
                </div>
                <span className="text-[11px] font-semibold text-gray-400">
                  Showing {filteredArtworks.length} of {artworks.length} items
                </span>
              </div>

              {/* Flex Wrap Pill Buttons Grid */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat;
                  const count = categoryCounts[cat] || 0;
                  return (
                    <motion.button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 focus:outline-none flex items-center gap-1.5 ${
                        isActive
                          ? "text-white shadow-lg"
                          : "bg-gray-100/80 text-gray-700 hover:bg-gray-200/80 hover:text-gray-900 border border-gray-200/50"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryPill"
                          className="absolute inset-0 bg-gradient-to-r from-[#FF7A00] via-[#E91E63] to-[#6D3AFF] rounded-full shadow-md"
                          transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10 font-bold">{cat}</span>
                      <span
                        className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full font-extrabold transition-colors ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {count}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Animated Masonry Gallery Grid */}
      <AnimatePresence mode="wait">
        {filteredArtworks.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-16 bg-white/80 backdrop-blur-md rounded-3xl border border-dashed border-gray-300 max-w-2xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-[#FF7A00] mx-auto mb-3 animate-pulse" />
            <h3 className="text-lg font-bold text-gray-800 font-poppins">
              No handcrafted artworks found
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Try searching with another keyword or pick a different category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#FF7A00] to-[#E91E63] text-white shadow-md hover:shadow-lg transition-shadow"
            >
              Show All Collections
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={selectedCategory + searchQuery}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredArtworks.map((art) => (
                <motion.div
                  key={art.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveArtwork(art)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
                >
                  {/* Card Image Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Interactive Glass Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2.5 rounded-full text-xs font-extrabold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <Eye className="w-4 h-4 text-[#FF7A00]" />
                        <span>View Artwork</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                      </motion.span>
                    </div>

                    {/* Floating Category Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-extrabold px-3 py-1 rounded-full border border-gray-200/60 shadow-sm">
                      {art.category}
                    </div>
                  </div>

                  {/* Artwork Information */}
                  <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base font-poppins group-hover:text-[#E91E63] transition-colors line-clamp-1">
                        {art.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                        {art.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                        Starting
                      </span>
                      <span className="text-base font-extrabold text-[#FF7A00] font-poppins">
                        ₹{art.priceStart.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <GalleryModal
        artwork={activeArtwork}
        onClose={() => setActiveArtwork(null)}
      />
    </div>
  );
};
