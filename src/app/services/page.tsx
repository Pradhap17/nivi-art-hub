"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Layers,
  ArrowRight,
  HelpCircle,
  Tag,
} from "lucide-react";
import { SERVICES } from "@/data/siteData";
import { FAQAccordion } from "@/components/FAQAccordion";

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E91E63]/10 text-[#E91E63] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Tailored Craftsmanship
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-gray-900">
          Custom Handmade Services
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Beautiful handcrafted products designed uniquely for you. Choose a service below to request a tailored quote or customize your design details.
        </p>
      </div>

      {/* Services Grid Breakdown */}
      <div className="space-y-12">
        {SERVICES.map((srv, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={srv.id}
              id={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-gray-100 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={srv.image}
                  alt={srv.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FF7A00] shadow-sm">
                  Starting ₹{srv.startingPrice.toLocaleString("en-IN")}
                </div>
              </div>

              {/* Details Column */}
              <div
                className={`lg:col-span-7 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                      Customization Available
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#6D3AFF]" /> Craft Duration: {srv.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900">
                    {srv.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Includes List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Includes & Variations:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {srv.includes.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 bg-[#FAF7F2] text-gray-800 text-xs px-3.5 py-1.5 rounded-xl border border-gray-200/70 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E91E63]" /> {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Suitable For & Materials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div>
                    <span className="font-bold text-gray-500 block mb-1">Suitable For:</span>
                    <p className="text-gray-700">{srv.suitableFor.join(" • ")}</p>
                  </div>
                  <div>
                    <span className="font-bold text-gray-500 block mb-1">Materials Used:</span>
                    <p className="text-gray-700">{srv.materials.join(" • ")}</p>
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(srv.name)}`}
                    className="w-full sm:w-auto btn-primary px-6 py-3.5 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Start Customization</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(srv.name)}`}
                    className="w-full sm:w-auto btn-secondary px-6 py-3.5 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Request Quote</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FAQ SECTION */}
      <section className="pt-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#6D3AFF]/10 text-[#6D3AFF] uppercase tracking-wider mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 font-poppins">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Everything you need to know about placing custom orders, shipping times, and payments.
          </p>
        </div>

        <FAQAccordion />
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-[#FF7A00] via-[#E91E63] to-[#6D3AFF] rounded-3xl p-10 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins leading-tight">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-white/90 text-base">
            Let's turn your ideas into a handcrafted masterpiece. Get in touch today for personalized design recommendations and quotes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base shadow-xl hover:bg-gray-100 transition-transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-[#E91E63]" />
            <span>Start Your Customization Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
