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
    email: "",
    phone: "",
    address: "",
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
    setFormData({
      email: "",
      phone: "",
      address: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
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
                Thank you. A Senior Financial Advisor from Doxo Promo will review your request and connect with you at <strong className="text-slate-900">{formData.email}</strong> within 2 business hours.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 space-y-2 text-left max-w-sm mx-auto border border-slate-200">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span>Phone:</span>
                  <span className="font-semibold text-slate-900">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span>Email:</span>
                  <span className="font-semibold text-slate-900">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Direct Advisor Hotline:</span>
                  <span className="font-semibold text-blue-600">{SITE_CONFIG.phone}</span>
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
              <div className="mb-6 space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Confidential Briefing
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Request a Consultation
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Please provide your contact information below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group uppercase tracking-wider"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
