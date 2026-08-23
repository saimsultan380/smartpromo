"use client";

import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

interface CtaBannerProps {
  onOpenConsultation: () => void;
}

export default function CtaBanner({ onOpenConsultation }: CtaBannerProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Strategic Engagement</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          Ready to Optimize Your Financial Architecture?
        </h2>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Contact our senior advisory team today to schedule a confidential review of your accounting infrastructure, tax exposure, and corporate growth objectives.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
          >
            <span>Schedule Strategic Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-base hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <span>{SITE_CONFIG.phone}</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 pt-4">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Strict NDA Protection</span>
          </div>
          <span>•</span>
          <div>Zero Long-Term Lock-in</div>
          <span>•</span>
          <div>Direct Partner Response in 2 Hours</div>
        </div>
      </div>
    </section>
  );
}
