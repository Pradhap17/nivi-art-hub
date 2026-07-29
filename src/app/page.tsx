"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Gem,
  Palette,
  HeartHandshake,
  Award,
  Users,
} from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/InstagramIcon";
import { ARTWORKS, SERVICES, INSTAGRAM_POSTS, SITE_INFO } from "@/data/siteData";
import { MasonryGallery } from "@/components/MasonryGallery";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Testimonials } from "@/components/Testimonials";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export default function HomePage() {
  const whyChooseUs = [
    {
      title: "100% Handmade",
      description: "Crafted strictly by hand with patience, passion, and meticulous attention to detail.",
      icon: HeartHandshake,
      color: "from-[#FF7A00] to-[#E91E63]",
    },
    {
      title: "Premium Quality Materials",
      description: "Acid-free paper, natural teakwood, high-shine mirrors, and pure South Indian silks.",
      icon: Gem,
      color: "from-[#E91E63] to-[#6D3AFF]",
    },
    {
      title: "Customized Designs",
      description: "Tailored to your exact photos, color themes, names, and personal memory visions.",
      icon: Palette,
      color: "from-[#6D3AFF] to-[#FF7A00]",
    },
    {
      title: "Affordable Luxury",
      description: "Direct studio craftsmanship from Coimbatore without middleman markups.",
      icon: ShieldCheck,
      color: "from-amber-500 to-rose-500",
    },
  ];

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-16 mesh-gradient-bg">
        {/* Soft Floating Ambient Light Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] hero-glow-1 rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] hero-glow-2 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#E91E63]/20 shadow-sm backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#FF7A00] animate-spin" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#E91E63]">
                Coimbatore's Premier Handcraft Studio
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-gray-900 tracking-tight leading-[1.15]">
              Handcrafted <br />
              <span className="gradient-text-primary">Heritage Artistry</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
              Where South Indian traditional craftsmanship meets modern Apple-grade luxury. Every custom piece is handcrafted with deep passion, precision, and timeless elegance.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              Specializing in Double Heart Baby Footprint String Art, Hand-Drawn Mandala Frames, 4D Layer Cut Papercut Light Boxes, Photo Embroidery, Temple Gopuram Mirror Welcome Boards, and Custom Luxury Hampers.
            </p>

            {/* Hero Dual CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/gallery"
                className="w-full sm:w-auto btn-primary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 shadow-xl transform hover:scale-105 transition-transform"
              >
                <span>Explore Art Gallery</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto btn-secondary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transform hover:scale-105 transition-transform"
              >
                <Sparkles className="w-4 h-4 text-[#6D3AFF]" />
                <span>Commission Custom Art</span>
              </Link>
            </div>

            {/* Quick Metrics Badges */}
            <div className="pt-6 border-t border-gray-200/60 flex items-center justify-center lg:justify-start gap-8 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-[#FF7A00]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold font-poppins text-gray-900">2+ Years</div>
                  <div className="text-xs text-gray-500">Master Craftsmanship</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-[#E91E63]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold font-poppins text-gray-900">100+</div>
                  <div className="text-xs text-gray-500">Happy Customers</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Interactive Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Featured Showcase Card */}
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 group">
              <Image
                src="/images/string_art_baby_footprints.jpg"
                alt="Double Heart Baby Footprints String Art Frame by Nivi Art Hub"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-dark text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF7A00]">
                      String & Thread Craft
                    </span>
                    <h3 className="text-base font-bold font-poppins mt-0.5">
                      Double Heart Baby Footprints Frame
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-extrabold backdrop-blur-md">
                    100% Handmade
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Floating Mini Badge Top Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-gray-200/80 shadow-2xl z-20"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/name_board_nivanyaa_mandala.jpg"
                  alt="Split Mandala Name Board"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-2">
                <div className="text-[10px] font-extrabold text-[#E91E63] uppercase">Featured</div>
                <div className="text-xs font-bold text-gray-900">Split Mandala Board</div>
              </div>
            </motion.div>

            {/* Floating Floating Mini Badge Bottom Left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-gray-200/80 shadow-2xl z-20"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/papercut_lightbox_naruto_anime.jpg"
                  alt="4D Papercut Light Box"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-2">
                <div className="text-[10px] font-extrabold text-[#FF7A00] uppercase">Trending</div>
                <div className="text-xs font-bold text-gray-900">4D Papercut Light Box</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#E91E63]/10 text-[#E91E63] uppercase tracking-wider mb-3">
            Handcrafted Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-poppins">
            Featured Art Collections
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Explore our signature handcrafted studio creation lines, made uniquely for your special milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, type: "spring", stiffness: 300 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={srv.image}
                  alt={srv.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                  Starts ₹{srv.startingPrice.toLocaleString("en-IN")}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg font-poppins group-hover:text-[#E91E63] transition-colors">
                    {srv.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <Link
                  href={`/gallery?category=${encodeURIComponent(srv.name)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7A00] group-hover:text-[#E91E63] pt-2 transition-colors"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE NIVI ART HUB */}
      <section className="bg-gradient-to-b from-gray-900 via-[#0B0F19] to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 text-[#FF7A00] uppercase tracking-wider mb-3">
              Unrivaled Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins">
              Why Choose Nivi Art Hub
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Combining the refinement of modern luxury design with the warmth of authentic South Indian heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-dark p-8 rounded-3xl space-y-4 hover:border-gray-700 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform`}>
                    <IconComp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-white">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR BEST WORKS (BEFORE/AFTER & MASONRY PREVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#6D3AFF]/10 text-[#6D3AFF] uppercase tracking-wider mb-3">
            Handcraft Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-poppins">
            Our Best Works & Completed Projects
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Witness our signature handcrafted creations comparing thread string art and hand-drawn mandala ink work.
          </p>
        </div>

        {/* Interactive Before & After Craft Slider with exact user requested images */}
        <BeforeAfterSlider
          title="Handcrafted Art Showcase & Process Transformation"
          beforeImage="/images/string_art_baby_footprints.jpg"
          afterImage="/images/name_board_nivanyaa_mandala.jpg"
          beforeLabel="Double Heart Baby Footprints String Art"
          afterLabel="Hand-Drawn Split Mandala Ink Frame (Nivanyaa)"
        />

        {/* Completed Projects Masonry Grid */}
        <div className="mt-16">
          <MasonryGallery artworks={ARTWORKS} showSearch={false} showFilters={true} />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-gradient-to-b from-[#FAF7F2] to-white py-16 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 uppercase tracking-wider mb-3">
              ★ Google Rating 5.0
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-poppins">
              Loved by Clients Across India
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Read real stories from customers who commissioned customized art with Nivi Art Hub.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* CRAFTING PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#FF7A00]/10 text-[#FF7A00] uppercase tracking-wider mb-3">
            Simple 5-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-poppins">
            How We Craft Your Custom Artwork
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            From initial concept to safe doorstep delivery, we ensure a seamless personal art creation experience.
          </p>
        </div>

        <ProcessTimeline />
      </section>

      {/* INSTAGRAM PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins text-gray-900">Instagram Studio Feed</h3>
                <p className="text-xs text-gray-500">Follow @nivi_art_hub for daily crafting stories and reels</p>
              </div>
            </div>

            <a
              href={SITE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow Us on Instagram</span>
            </a>
          </div>

          {/* Instagram Post Auto Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-64 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200"
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                  <p className="text-xs line-clamp-3 leading-relaxed">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
