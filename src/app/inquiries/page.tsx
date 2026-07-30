"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  Mail,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  User,
  MapPin,
  Calendar,
  Download,
  RefreshCw,
  Phone,
  Paperclip,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  serviceRequired: string;
  budget: string;
  timeline: string;
  projectDescription: string;
  referenceFileName?: string | null;
  status: "New" | "Contacted" | "In Progress" | "Completed";
  createdAt: string;
}

export default function InquiriesDashboardPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      // 1. Fetch from server API
      const res = await fetch("/api/contact");
      const data = await res.json();

      let serverInquiries: Inquiry[] = data.success ? data.inquiries : [];

      // 2. Fetch local backup inquiries
      let localInquiries: Inquiry[] = [];
      try {
        localInquiries = JSON.parse(localStorage.getItem("nivi_art_inquiries") || "[]");
      } catch (e) {}

      // Combine & deduplicate by ID
      const map = new Map<string, Inquiry>();
      [...serverInquiries, ...localInquiries].forEach((item) => {
        if (!map.has(item.id)) {
          map.set(item.id, item);
        }
      });

      setInquiries(Array.from(map.values()));
    } catch (err) {
      console.error("Failed to load inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleStatusChange = async (id: string, newStatus: Inquiry["status"]) => {
    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inquiries, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `nivi_art_inquiries_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.projectDescription.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || inq.status === statusFilter;
    const matchesService = serviceFilter === "All" || inq.serviceRequired === serviceFilter;

    return matchesSearch && matchesStatus && matchesService;
  });

  const countNew = inquiries.filter((i) => i.status === "New").length;
  const countContacted = inquiries.filter((i) => i.status === "Contacted").length;
  const countInProgress = inquiries.filter((i) => i.status === "In Progress").length;
  const countCompleted = inquiries.filter((i) => i.status === "Completed").length;

  const categories = Array.from(new Set(inquiries.map((i) => i.serviceRequired)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Studio Management Dashboard
          </div>
          <h1 className="text-3xl font-extrabold font-poppins text-gray-900">
            Custom Order Inquiries
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            View, track, and manage all incoming custom art inquiry requests for Artist Surya.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchInquiries}
            className="btn-secondary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={exportJSON}
            disabled={inquiries.length === 0}
            className="btn-primary px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-md disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-500">New Requests</span>
          <p className="text-3xl font-extrabold text-gray-900 mt-2">{countNew}</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Contacted</span>
          <p className="text-3xl font-extrabold text-gray-900 mt-2">{countContacted}</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">In Progress</span>
          <p className="text-3xl font-extrabold text-gray-900 mt-2">{countInProgress}</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">Completed</span>
          <p className="text-3xl font-extrabold text-gray-900 mt-2">{countCompleted}</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search name, phone, email, Ref ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Service Filter */}
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
          >
            <option value="All">All Services</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Inquiries Table / List */}
      {loading ? (
        <div className="py-20 text-center text-gray-400 space-y-3">
          <Sparkles className="w-8 h-8 animate-spin mx-auto text-[#FF7A00]" />
          <p className="text-sm font-medium">Loading inquiries...</p>
        </div>
      ) : filteredInquiries.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm space-y-4">
          <div className="w-16 h-16 rounded-full bg-orange-50 text-[#FF7A00] mx-auto flex items-center justify-center">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 font-poppins">No Custom Art Inquiries Found</h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            {inquiries.length === 0
              ? "No customer inquiries have been submitted yet. Once a customer fills out the contact form, their order details will appear right here!"
              : "No inquiries match your current search and filter criteria."}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredInquiries.map((inquiry) => {
            const rawPhone = inquiry.phone.replace(/[^0-9]/g, "");
            const waMsg = `Hello ${inquiry.fullName},\n\nThis is Artist Surya from Nivi Art Hub regarding your custom order inquiry [Ref: ${inquiry.id}] for *${inquiry.serviceRequired}*.\n\nWe are excited to work on your request!`;
            const waUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(waMsg)}`;
            const mailUrl = `mailto:${inquiry.email}?subject=${encodeURIComponent(`Nivi Art Hub Custom Order [Ref: ${inquiry.id}]`)}&body=${encodeURIComponent(`Hello ${inquiry.fullName},\n\nThank you for reaching out to Nivi Art Hub!`)}`;

            return (
              <motion.div
                key={inquiry.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow space-y-4"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700">
                      {inquiry.id}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(inquiry.createdAt).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </span>
                  </div>

                  {/* Status selector */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 font-semibold">Status:</span>
                    <select
                      value={inquiry.status}
                      onChange={(e) =>
                        handleStatusChange(inquiry.id, e.target.value as Inquiry["status"])
                      }
                      className={`text-xs font-bold px-3 py-1 rounded-full border focus:outline-none ${
                        inquiry.status === "New"
                          ? "bg-rose-50 text-rose-700 border-rose-200"
                          : inquiry.status === "Contacted"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : inquiry.status === "In Progress"
                          ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                          : "bg-emerald-50 text-emerald-700 border-emerald-200"
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>

                {/* Main Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {/* Customer Info */}
                  <div className="space-y-1.5">
                    <span className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                      <User className="w-4 h-4 text-[#FF7A00]" /> {inquiry.fullName}
                    </span>
                    <p className="text-gray-600 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-gray-400" /> {inquiry.email}
                    </p>
                    <p className="text-gray-600 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gray-400" /> {inquiry.phone}
                    </p>
                    <p className="text-gray-600 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" /> {inquiry.city}
                    </p>
                  </div>

                  {/* Artwork Specs */}
                  <div className="space-y-1.5">
                    <span className="font-bold text-[#E91E63] text-sm">
                      {inquiry.serviceRequired}
                    </span>
                    <p className="text-gray-600">
                      <strong>Budget:</strong> {inquiry.budget}
                    </p>
                    <p className="text-gray-600">
                      <strong>Timeline:</strong> {inquiry.timeline}
                    </p>
                    {inquiry.referenceFileName && (
                      <p className="text-gray-600 flex items-center gap-1 font-medium text-emerald-700">
                        <Paperclip className="w-3.5 h-3.5" /> Ref Photo: {inquiry.referenceFileName}
                      </p>
                    )}
                  </div>

                  {/* Project Notes */}
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 text-gray-700">
                    <strong className="block text-gray-900 mb-1 font-poppins">Personalization Notes:</strong>
                    <p className="leading-relaxed whitespace-pre-wrap">{inquiry.projectDescription}</p>
                  </div>
                </div>

                {/* Quick Action Footer */}
                <div className="pt-2 flex flex-wrap items-center justify-end gap-3 border-t border-gray-100">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Customer</span>
                  </a>

                  <a
                    href={mailUrl}
                    className="bg-gray-900 hover:bg-black text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Customer</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
