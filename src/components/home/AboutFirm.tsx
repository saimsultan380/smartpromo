"use client";

import Image from "next/image";
import { Check, X, ArrowRight, Users, Target, Zap } from "lucide-react";
import { COMPARISON_DATA } from "@/data/content";

interface AboutFirmProps {
  onOpenConsultation: () => void;
}

export default function AboutFirm({ onOpenConsultation }: AboutFirmProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Section: Narrative + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column Visual */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&auto=format&fit=crop&q=80"
                alt="Executive Strategic Financial Consultation"
                width={800}
                height={600}
                className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Testimonial overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    CPA
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Partner-Level Oversight</h4>
                    <p className="text-[11px] text-slate-500">Direct senior advisor access on every engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>About Our Firm</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Integrity, Precision, and Partnership that Scales
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                At <strong>Doxo Promo LLC</strong>, we don&apos;t treat financial numbers as historical recordkeeping. We treat your balance sheet as a strategic roadmap for liquidity, tax defense, and valuation growth.
              </p>
              <p className="text-sm sm:text-base text-slate-500">
                Whether you are seeking institutional debt facilities, closing complex multi-state tax returns, or preparing your capitalization table for institutional investment, our team delivers the speed and rigor of a Tier-1 financial institution without the friction.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  <Target className="w-4 h-4" /> Proactive Architecture
                </div>
                <p className="text-xs text-slate-500">Continuous year-round quarterly tax harvesting rather than end-of-year panicking.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <Zap className="w-4 h-4" /> Speed & Automation
                </div>
                <p className="text-xs text-slate-500">Automated ledger pipelines providing pristine month-end statements in 3 days.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-md group"
              >
                <span>Learn More About Our Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Why Doxo Promo LLC: Modern Comparison Matrix */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Companies Transition to Doxo Promo
            </h3>
            <p className="text-sm text-slate-500">
              The concrete differences between conventional bookkeeping and our proactive financial architecture.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[580px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-4">Financial Pillar</th>
                  <th className="py-4 px-4 text-slate-500">Traditional Accounting Firm</th>
                  <th className="py-4 px-4 text-blue-600 font-extrabold bg-blue-50/50 rounded-t-xl">
                    Doxo Promo LLC Advantage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {COMPARISON_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-900 text-xs sm:text-sm">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-500 text-xs sm:text-sm flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{item.traditional}</span>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-900 text-xs sm:text-sm bg-blue-50/30">
                      <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                        <Check className="w-4 h-4 shrink-0" />
                        <span className="text-slate-900">{item.doxoPromo}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
