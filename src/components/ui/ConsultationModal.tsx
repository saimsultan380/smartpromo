"use client";

import { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { SITE_CONFIG } from "@/data/content";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "cfo-advisory",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "$1M - $5M",
    service: defaultService,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563EB", "#10B981", "#F59E0B", "#6366F1"],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header decoration */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Consultation Confirmed!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. A Senior Financial Advisor from Doxo Promo LLC will review your company profile and reach out within 2 business hours.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 space-y-1 text-left max-w-sm mx-auto border border-slate-200">
                <div className="flex justify-between">
                  <span>Selected Focus:</span>
                  <span className="font-semibold text-slate-900 capitalize">
                    {formData.service.replace("-", " ")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Direct Advisor Contact:</span>
                  <span className="font-semibold text-slate-900">
                    {SITE_CONFIG.phone}
                  </span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-medium transition-colors shadow-lg"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Confidential Briefing
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Schedule Strategic Advisory Session
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Connect with a CPA / Fractional CFO to audit your tax liabilities, cash flow, or capital architecture.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Dynamics"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (832) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Primary Advisory Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="cfo-advisory">Fractional CFO Advisory</option>
                      <option value="tax-optimization">Corporate Tax Architecture</option>
                      <option value="loan-consultation">Loan & Capital Structuring</option>
                      <option value="bookkeeping">Enterprise Bookkeeping</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Annual Revenue Bracket
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="Under $500k">Under $500k</option>
                      <option value="$500k - $1M">$500k - $1M</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $20M">$5M - $20M</option>
                      <option value="$20M+">$20M+</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm group"
                  >
                    Confirm Strategic Session
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                <p className="text-center text-[11px] text-slate-400">
                  Strictly Confidential. Protected by NDA & AICPA Professional Ethics Standards.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
