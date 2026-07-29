"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Share2, CheckCircle, Tag, Layers, ArrowRight } from "lucide-react";
import { Artwork } from "@/data/siteData";

interface GalleryModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ artwork, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  if (!artwork) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: `Check out ${artwork.title} on Nivi Art Hub!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-gray-100"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Column with Zoom */}
            <div className="relative h-[320px] md:h-[500px] bg-gray-900 group overflow-hidden cursor-zoom-in" onClick={() => setZoomed(!zoomed)}>
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className={`object-cover transition-transform duration-500 ${
                  zoomed ? "scale-150" : "group-hover:scale-105"
                }`}
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" /> Click image to zoom
              </div>
            </div>

            {/* Content Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#E91E63]/10 text-[#E91E63]">
                    <Tag className="w-3.5 h-3.5" /> {artwork.category}
                  </span>
                  {artwork.customizationAvailable && (
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Customizable
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 font-poppins leading-tight">
                  {artwork.title}
                </h3>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 font-medium">Starts from</span>
                  <span className="text-2xl font-extrabold text-[#FF7A00]">
                    ₹{artwork.priceStart.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {artwork.description}
                </p>

                {/* Materials Used */}
                <div className="mt-6 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[#6D3AFF]" /> Materials & Crafting
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {artwork.materials.map((mat, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-lg border border-gray-200/60"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(artwork.category)}&item=${encodeURIComponent(artwork.title)}`}
                  onClick={onClose}
                  className="flex-1 btn-primary py-3.5 px-6 rounded-2xl font-semibold text-center flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Order Custom Piece</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={handleShare}
                  className="p-3.5 rounded-2xl border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors flex items-center justify-center shrink-0"
                  title="Share Artwork"
                >
                  {copied ? <CheckCircle className="w-5 h-5 text-emerald-600" /> : <Share2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
