"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { SITE_CONFIG } from "@/data/content";

export default function ContactView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SITE_CONFIG.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#2563EB", "#10B981", "#F59E0B", "#6366F1"],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Header */}
      <Navbar onOpenConsultation={() => setModalOpen(true)} />

      <main className="flex-1">
        {/* Page Hero Header with Breadcrumbs */}
        <section className="pt-16 pb-12 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Contact Us
            </h1>
            <nav className="text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Contact</span>
            </nav>
          </div>
        </section>

        {/* Main Section: Responsive Order (Form First on Mobile, Details Second) */}
        <section className="pt-4 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Form Column: order-1 on mobile, order-2 on desktop */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-5 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        Inquiry Received &amp; Dispatched!
                      </h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Thank you for contacting Doxo Promo. A Senior CPA will review your details and connect with you within 2 business hours.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl text-xs text-slate-600 space-y-2 max-w-md mx-auto border border-slate-200 text-left">
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-400">Email:</span>
                        <span className="font-bold text-slate-900">{formData.email}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-400">Phone:</span>
                        <span className="font-bold text-slate-900">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Direct Advisor Hotline:</span>
                        <span className="font-bold text-blue-600">{SITE_CONFIG.phone}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="mt-4 px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-8 space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                        <span>Confidential Review</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        Request a Consultation
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Please outline your corporate scope below. All correspondence is covered under strict NDA.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="marcus@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (713) 919-9690"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        />
                      </div>

                      {/* Physical Address */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Physical Address *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="18026 Barton Ridge Ln, Richmond, TX 77407"
                          value={formData.address || ""}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 group uppercase tracking-wider"
                      >
                        <span>SUBMIT INQUIRY</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

            {/* Details Column: order-2 on mobile, order-1 on desktop */}
            <div className="order-2 lg:order-1 lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-9 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Firm Details
                  </h2>
                </div>

                <div className="space-y-6 pt-2">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Phone Number
                      </div>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-100 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Physical Address
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        {SITE_CONFIG.address}
                      </p>
                      <button
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:underline pt-0.5"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-600">Address Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="contact-modal"
      />
    </div>
  );
}
