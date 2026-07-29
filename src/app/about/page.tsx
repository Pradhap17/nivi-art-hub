"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Award,
  Users,
  Target,
  Compass,
  CheckCircle2,
  Brush,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function AboutPage() {
  const stats = [
    { value: "2+", label: "Years Experience", icon: Award },
    { value: "100+", label: "Custom Artworks", icon: Sparkles },
    { value: "100+", label: "Happy Clients", icon: Users },
    { value: "100%", label: "Handmade Guaranteed", icon: Heart },
  ];

  const values = [
    { title: "100% Handmade", desc: "No mass production; every item is hand-built with individual care and precision." },
    { title: "Original Artistry", desc: "Authentic South Indian heritage motifs fused with modern minimalism and vibrant aesthetics." },
    { title: "Creative Customization", desc: "Your stories, family memories, and color visions crafted into physical art." },
    { title: "Sustainable Materials", desc: "Natural teakwood, organic cotton, non-toxic clays, and acid-free archival paper." },
    { title: "Affordable Luxury", desc: "Honest pricing straight from our Coimbatore studio with zero middleman markups." },
    { title: "Customer First", desc: "Direct consultation, design approvals, and doorstep safe delivery." },
  ];

  const workshopImages = [
    { src: "/images/mandala_wedding_chandra_prakash.jpg", title: "Hand-Drawn Mandala Ink Craft", category: "Mandala Studio" },
    { src: "/images/photo_embroidery_wedding_garland.jpg", title: "Wedding Garland Photo Embroidery", category: "Hand-Stitched Art" },
    { src: "/images/string_art_baby_footprints.jpg", title: "Double Heart Baby Footprints", category: "String Art Studio" },
    { src: "/images/papercut_lightbox_naruto_anime.jpg", title: "4D Layer Cut Papercut Light Box", category: "Papercraft Light Studio" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold uppercase tracking-wider">
          <Brush className="w-3.5 h-3.5" /> Our Heritage Story
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-gray-900 leading-tight">
          Crafting Heritage One Piece at a Time
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Nivi Art Hub is an independent handcrafted art studio based in Coimbatore, Tamil Nadu, dedicated to handcrafting personalized heirlooms, 4D Layer Cut Papercut Light Boxes, Temple Gopuram Mirror Welcome Boards, Photo Embroidery, String Art, and bespoke gifts.
        </p>
      </motion.div>

      {/* Founder Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
      >
        {/* Founder / Featured Art Photo */}
        <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 group">
          <Image
            src="/images/mandala_wedding_chandra_prakash.jpg"
            alt="Handcrafted Mandala Photo Frame by Surya - Nivi Art Hub"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 right-4 glass-dark p-4 rounded-xl text-white">
            <h4 className="font-bold text-base font-poppins">{SITE_INFO.founder}</h4>
            <p className="text-xs text-[#FF7A00] font-semibold">{SITE_INFO.founderRole}</p>
          </div>
        </div>

        {/* Founder Story Text */}
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E91E63]">
            Behind The Studio
          </span>
          <h2 className="text-3xl font-bold font-poppins text-gray-900">
            Meet the Artist & Founder
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed font-medium">
            "Nivi Art Hub was born with a passion to preserve traditional Indian craftsmanship while blending it with modern creativity. Every handcrafted piece reflects dedication, patience, and artistic excellence."
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Starting from a workshop studio in Coimbatore, Surya transformed traditional South Indian Temple Gopuram motifs, hand-drawn mandala ink work, silk thread photo embroidery, 4D Layer Cut paper art, and string art into contemporary, Apple-inspired home art accents and personalized gifts loved by clients across India and internationally.
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#FF7A00]/10 via-[#E91E63]/5 to-transparent p-8 rounded-3xl border border-[#FF7A00]/20 space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FF7A00] text-white flex items-center justify-center shadow-md">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-poppins text-gray-900">Our Mission</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" /> Preserve South Indian traditional heritage art
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" /> Support authentic handmade craft & artisans
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" /> Celebrate individual family memories & stories
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" /> Deliver pure delight through fine handwork
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#6D3AFF]/10 via-[#E91E63]/5 to-transparent p-8 rounded-3xl border border-[#6D3AFF]/20 space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#6D3AFF] text-white flex items-center justify-center shadow-md">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-poppins text-gray-900">Our Vision</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            To become India's most trusted handcrafted art customization brand—where every home displays a piece of authentic heritage art designed with modern luxury elegance.
          </p>
        </motion.div>
      </section>

      {/* Statistics Counter Cards */}
      <section className="bg-gradient-to-r from-gray-900 to-[#0B0F19] text-white rounded-3xl p-10 sm:p-14 shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-2"
              >
                <IconComp className="w-8 h-8 text-[#FF7A00] mx-auto" />
                <div className="text-4xl sm:text-5xl font-extrabold font-poppins text-white">
                  {st.value}
                </div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  {st.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E91E63]">
            Our Guiding Pillars
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 font-poppins mt-1">
            Studio Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-gray-900 font-poppins text-base mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" /> {v.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workshop Gallery & Craft Process */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D3AFF]">
            Inside Our Coimbatore Studio
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 font-poppins mt-1">
            Workshop & Craft Creations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-64 rounded-2xl overflow-hidden group shadow-md"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold text-[#FF7A00]">
                  {img.category}
                </span>
                <h4 className="font-bold text-sm font-poppins">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
