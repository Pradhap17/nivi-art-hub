"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Upload,
} from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/InstagramIcon";
import { SITE_INFO, CATEGORIES } from "@/data/siteData";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";
  const itemParam = searchParams.get("item") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    serviceRequired: serviceParam || "Miniature Frame",
    budget: "₹500 - ₹2,000",
    timeline: "Standard (3-7 Days)",
    projectDescription: itemParam ? `I am interested in customizing: ${itemParam}` : "",
  });

  useEffect(() => {
    if (serviceParam) {
      const matchedCat = CATEGORIES.find(
        (c) => c.toLowerCase() === serviceParam.toLowerCase()
      );
      if (matchedCat) {
        setFormData((prev) => ({ ...prev, serviceRequired: matchedCat }));
      }
    }
  }, [serviceParam]);

  const [submitted, setSubmitted] = useState(false);
  const [referenceFileName, setReferenceFileName] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReferenceFileName(e.target.files[0].name);
    }
  };

  const generateWhatsAppUrl = () => {
    const lines = [
      "Hello Nivi Art Hub, I would like to place a Custom Art Request!",
      "",
      `*Full Name:* ${formData.fullName}`,
      `*Email:* ${formData.email}`,
      `*Phone / WhatsApp:* ${formData.phone}`,
      `*City:* ${formData.city}`,
      `*Service Required:* ${formData.serviceRequired}`,
      `*Estimated Budget:* ${formData.budget}`,
      `*Timeline Needed:* ${formData.timeline}`,
    ];

    if (referenceFileName) {
      lines.push(`*Reference Photo Uploaded:* ${referenceFileName}`);
    }

    lines.push("", `*Project Description / Personalization Notes:*`, formData.projectDescription);

    const msg = lines.join("\n");
    return `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppUrl();
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold uppercase tracking-wider">
          <MessageCircle className="w-3.5 h-3.5" /> Direct Artist Consultation
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-gray-900">
          Let's Create Something Beautiful Together
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Have an idea for a 4D Papercut Light Box, Temple Gopuram Mirror Welcome Board, Miniature Shadow Box, Name Board, Photo Embroidery, or Gift Hamper? Fill out the details below or message us directly on WhatsApp.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-bold font-poppins text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#E91E63]" /> Custom Art Inquiry Form
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">* Required fields</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98425 40163"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Your City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Coimbatore, Chennai, Bengaluru"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] transition-all"
                    >
                      {CATEGORIES.filter((c) => c !== "All").map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                      <option value="Other">Other / Custom Artwork</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] transition-all"
                    >
                      <option value="Under ₹500">Under ₹500</option>
                      <option value="₹500 - ₹1,500">₹500 - ₹1,500</option>
                      <option value="₹1,500 - ₹3,500">₹1,500 - ₹3,500</option>
                      <option value="₹3,500+ Luxury">₹3,500+ Luxury</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Timeline needed
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] transition-all"
                    >
                      <option value="Standard (3-7 Days)">Standard (3-7 Days)</option>
                      <option value="Urgent (1-3 Days)">Urgent (1-3 Days)</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Reference File Upload */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Upload Reference Photo (Optional)
                  </label>
                  <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-4 text-center hover:border-[#FF7A00] transition-colors cursor-pointer bg-gray-50/50">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                      <Upload className="w-4 h-4 text-[#FF7A00]" />
                      <span>
                        {referenceFileName ? `Uploaded: ${referenceFileName}` : "Click or drag reference photo here"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Project Description & Personalization Notes *
                  </label>
                  <textarea
                    name="projectDescription"
                    rows={4}
                    required
                    placeholder="Describe your vision, names to include, colors, quotes, or special anniversary dates..."
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-lg transform hover:scale-[1.01] transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Submit Custom Order Request via WhatsApp</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-poppins text-gray-900">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry details for <strong className="text-gray-900">{formData.serviceRequired}</strong> have been compiled and sent directly to Artist Surya on WhatsApp!
                  </p>
                </div>

                {/* Inquiry Summary Box */}
                <div className="bg-gray-50 rounded-2xl p-4 text-left border border-gray-100 space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-800">Customer Name:</span>
                    <span>{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-800">Service Required:</span>
                    <span>{formData.serviceRequired}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-gray-800">Budget & Timeline:</span>
                    <span>{formData.budget} • {formData.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">City / Phone:</span>
                    <span>{formData.city} ({formData.phone})</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-md transform hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Re-open WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto btn-secondary px-6 py-3.5 rounded-2xl text-sm font-semibold"
                  >
                    Submit Another Request
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Side: Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
            <h3 className="text-2xl font-bold font-poppins text-gray-900">Studio Details</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-poppins">Studio Location</h4>
                  <p className="text-xs text-gray-600 mt-0.5">{SITE_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-poppins">WhatsApp Direct</h4>
                  <a
                    href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(SITE_INFO.whatsappDefaultMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-600 font-semibold hover:underline mt-0.5 block"
                  >
                    {SITE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6D3AFF]/10 text-[#6D3AFF] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-poppins">Email Us</h4>
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="text-xs text-[#6D3AFF] font-semibold hover:underline mt-0.5 block"
                  >
                    {SITE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-poppins">Instagram Page</h4>
                  <a
                    href={SITE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-pink-600 font-semibold hover:underline mt-0.5 block"
                  >
                    {SITE_INFO.instagram}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-poppins">Working Hours</h4>
                  <p className="text-xs text-gray-600 mt-0.5">{SITE_INFO.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Quick Link Action Buttons */}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(SITE_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md transition-colors transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>

              <a
                href={SITE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md transform hover:scale-[1.02]"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram Profile</span>
              </a>

              <a
                href={`mailto:${SITE_INFO.email}`}
                className="w-full bg-gray-900 hover:bg-black text-white py-3.5 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md transform hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-500 font-medium">
          <Sparkles className="w-5 h-5 text-[#FF7A00] animate-spin" />
          <span>Loading Contact Form...</span>
        </div>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
