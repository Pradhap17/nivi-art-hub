import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { SITE_INFO, SERVICES } from "@/data/siteData";
import { MapPin, Mail, Phone, MessageCircle, Heart } from "lucide-react";
import { InstagramIcon as Instagram } from "./InstagramIcon";

export const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-gray-300 pt-16 pb-8 border-t border-gray-800 relative overflow-hidden">
      {/* Soft Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6D3AFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-4">
              Where traditional South Indian craftsmanship meets contemporary design. Every piece is thoughtfully handcrafted with passion, precision, and timeless artistry in Coimbatore.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E91E63] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(SITE_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FF7A00] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide font-poppins">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#FF7A00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FF7A00] transition-colors">
                  Art Gallery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF7A00] transition-colors">
                  Custom Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF7A00] transition-colors">
                  About Artist & Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF7A00] transition-colors">
                  Contact & Custom Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (Col 4) */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide font-poppins">Art Categories</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-[#E91E63] transition-colors"
                  >
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 5) */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide font-poppins">Connect With Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                <span className="text-gray-400">{SITE_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E91E63] shrink-0" />
                <a href={`tel:${SITE_INFO.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {SITE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#6D3AFF] shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {SITE_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
                <a
                  href={SITE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {SITE_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Nivi Art Hub. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>in Coimbatore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
