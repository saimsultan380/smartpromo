"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Lock,
  Copy,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { SITE_CONFIG } from "@/data/content";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessEntity: "",
    email: "",
    phone: "",
    areaOfInterest: "Tax Planning & Advisory",
    revenueBracket: "$1M - $5M",
    message: "",
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
      businessEntity: "",
      email: "",
      phone: "",
      areaOfInterest: "Tax Planning & Advisory",
      revenueBracket: "$1M - $5M",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Glassmorphic Header */}
      <Navbar onOpenConsultation={() => setModalOpen(true)} />

      <main className="flex-1">
        {/* Page Hero Header with Breadcrumbs */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-xs font-semibold text-slate-500 mb-2">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-600 font-bold">Contact</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              Contact Us
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Initiate a confidential discussion with our senior CPAs and corporate financial advisors.
            </p>
          </div>
        </section>

        {/* Main 2-Column Section */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Firm Directory Hub */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-9 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-lg space-y-8">
                {/* Header with live advisor status */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                      Direct Communication
                    </span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Advisors Online</span>
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Firm Directory
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct corporate channels for inquiries, audits, and urgent filings.
                  </p>
                </div>

                {/* Directory Items */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Phone Directory
                      </div>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-blue-600 transition-colors block"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                      <p className="text-[11px] text-slate-500">Direct connection to Senior Advisor queue</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Email Correspondence
                      </div>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                      >
                        {SITE_CONFIG.email}
                      </a>
                      <p className="text-[11px] text-slate-500">Guaranteed 2-hour business reply</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-100 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Headquarters Address
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
                            <span>Copy Full Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-amber-100 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Operating Hours
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        {SITE_CONFIG.hours}
                      </p>
                      <p className="text-[11px] text-slate-500">Sat - Sun: Closed (Emergency on-call for retainers)</p>
                    </div>
                  </div>
                </div>

                {/* Secure Client Vault Banner */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Lock className="w-4 h-4 text-emerald-500" />
                    <span>Confidential Vault Upload</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Existing clients and onboarding prospects can securely upload tax returns, W-2s, and ledgers to our SOC-2 encrypted cloud vault.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Request a Consultation Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-5 animate-fadeIn">
                    <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        Inquiry Received & Dispatched!
                      </h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Thank you for contacting Smart Promo LLC. A Senior CPA specializing in <strong className="text-slate-900">{formData.areaOfInterest}</strong> will review your details and connect within 2 business hours.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl text-xs text-slate-600 space-y-2 max-w-md mx-auto border border-slate-200 text-left">
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-400">Entity:</span>
                        <span className="font-bold text-slate-900">{formData.businessEntity}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-400">Revenue Tier:</span>
                        <span className="font-bold text-slate-900">{formData.revenueBracket}</span>
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
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Confidential Review</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Request a Consultation
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Please outline your corporate scope below. All correspondence is covered under strict NDA.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Legal Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Legal Name / Business Entity *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Apex Dynamics LLC or Marcus Vance"
                          value={formData.businessEntity}
                          onChange={(e) => setFormData({ ...formData, businessEntity: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Corporate Email *
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

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (713) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                          />
                        </div>
                      </div>

                      {/* Area of Interest & Revenue */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Area of Interest
                          </label>
                          <select
                            value={formData.areaOfInterest}
                            onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                          >
                            <option value="Tax Planning & Advisory">Tax Planning & Advisory</option>
                            <option value="Bookkeeping & Payroll">Bookkeeping & Payroll</option>
                            <option value="Virtual CFO Advisory">Virtual CFO Advisory</option>
                            <option value="Loan Consulting & Debt">Loan Consulting & Debt</option>
                            <option value="Audit Strategy & Defense">Audit Strategy & Defense</option>
                            <option value="Business Formation">Business Formation</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Annual Revenue Bracket
                          </label>
                          <select
                            value={formData.revenueBracket}
                            onChange={(e) => setFormData({ ...formData, revenueBracket: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                          >
                            <option value="Under $500k">Under $500k</option>
                            <option value="$500k - $1M">$500k - $1M</option>
                            <option value="$1M - $5M">$1M - $5M</option>
                            <option value="$5M - $20M">$5M - $20M</option>
                            <option value="$20M+">$20M+</option>
                          </select>
                        </div>
                      </div>

                      {/* Detailed Message */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Detailed Message *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Please describe your current accounting setup, tax challenges, loan requirements, or timeline..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-y"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-4 px-6 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2 group uppercase tracking-wider"
                      >
                        <span>Submit Inquiry</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                        <div className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Protected by AICPA NDA</span>
                        </div>
                        <span>•</span>
                        <div>No Obligation Briefing</div>
                      </div>
                    </form>
                  </div>
                )}
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
