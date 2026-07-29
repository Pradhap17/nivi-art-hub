"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/siteData";

export const FAQAccordion = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 font-poppins hover:text-[#E91E63] transition-colors focus:outline-none"
            >
              <span className="flex items-center gap-3 text-base">
                <HelpCircle className="w-5 h-5 text-[#FF7A00] shrink-0" />
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#E91E63]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-600 border-t border-gray-100 leading-relaxed pl-14">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
