"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

export const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {TESTIMONIALS.map((test) => (
        <div
          key={test.id}
          className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          {/* Header & Google Verification Badge */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> Google Verified Review
              </span>
            </div>

            {/* Review Body */}
            <p className="text-gray-700 text-sm leading-relaxed italic">
              "{test.review}"
            </p>
          </div>

          {/* Reviewer Details */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-[#FF7A00]/30">
              <Image
                src={test.photo}
                alt={test.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm font-poppins">{test.name}</h4>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#E91E63]" /> {test.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
