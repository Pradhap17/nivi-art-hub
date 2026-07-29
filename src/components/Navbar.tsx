"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, PhoneCall } from "lucide-react";
import { Logo } from "./Logo";
import { SITE_INFO } from "@/data/siteData";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Left */}
          <Logo size="md" />

          {/* Desktop Navigation Links Right */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-[#E91E63] font-semibold"
                      : "text-gray-700 hover:text-[#FF7A00]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#E91E63]/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {pathname !== "/contact" && (
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 btn-primary px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Commission Art</span>
              </Link>
            )}

            {/* Direct WhatsApp Quick Icon */}
            <a
              href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(SITE_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors"
              title="Quick WhatsApp Chat"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-[#FF7A00]/10 to-[#E91E63]/10 text-[#E91E63]"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {pathname !== "/contact" && (
                <div className="pt-4 border-t border-gray-200/60 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-center btn-primary py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Commission Custom Art</span>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
