"use client";

import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  onOpenConsultation: () => void;
}

export default function CtaBanner({ onOpenConsultation }: CtaBannerProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden text-white">
      {/* Dark Architectural Abstract Background Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80')`,
        }}
      />
      
      {/* Radial Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Ready to Optimize Your Financial Architecture?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Contact us today to schedule a comprehensive review of your accounting infrastructure, compliance status, and growth objectives.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
          >
            <span>SCHEDULE CONSULTATION</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
