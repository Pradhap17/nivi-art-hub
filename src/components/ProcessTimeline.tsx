"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, MessageCircle, CheckCircle2, Sparkles, Truck } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteData";

export const ProcessTimeline = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb":
        return <Lightbulb className="w-5 h-5" />;
      case "MessageCircle":
        return <MessageCircle className="w-5 h-5" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Truck":
        return <Truck className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full py-8">
      {/* Desktop Horizontal Stepper */}
      <div className="hidden lg:grid grid-cols-5 gap-4 relative">
        {/* Animated Connecting Gradient Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-1/2 left-[10%] right-[10%] h-1.5 bg-gradient-to-r from-[#FF7A00] via-[#E91E63] to-[#6D3AFF] -translate-y-1/2 -z-0 rounded-full origin-left shadow-sm"
        />

        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 22, delay: idx * 0.12 }}
            whileHover={{ y: -6 }}
            className="relative z-10 flex flex-col items-center text-center group cursor-pointer"
          >
            {/* Step Icon Circle */}
            <motion.div
              whileHover={{ rotate: 12, scale: 1.15 }}
              className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-200 shadow-xl flex items-center justify-center text-[#E91E63] group-hover:border-[#E91E63] group-hover:bg-gradient-to-br group-hover:from-[#FF7A00] group-hover:to-[#E91E63] group-hover:text-white transition-all duration-300 mb-4"
            >
              {getIcon(step.iconName)}
            </motion.div>

            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF7A00] mb-1">
              Step 0{step.step}
            </span>
            <h4 className="text-base font-bold text-gray-900 font-poppins group-hover:text-[#E91E63] transition-colors">
              {step.title}
            </h4>
            <p className="text-xs text-gray-500 mt-1 max-w-[180px] leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Vertical Stepper */}
      <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-dashed border-[#E91E63]/30 ml-4">
        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.1 }}
            className="relative pl-4"
          >
            {/* Node Bullet */}
            <div className="absolute -left-[35px] top-1.5 w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#E91E63] text-white flex items-center justify-center shadow-md">
              {getIcon(step.iconName)}
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF7A00]">
                Step 0{step.step}
              </span>
              <h4 className="text-base font-bold text-gray-900 font-poppins">{step.title}</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
