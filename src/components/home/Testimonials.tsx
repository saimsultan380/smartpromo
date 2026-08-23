"use client";

import Image from "next/image";
import { Quote, ShieldCheck, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Executive Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Results that Move the Needle
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            See how founders, CEOs, and CFOs rely on Smart Promo LLC to protect balance sheets and scale capital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-blue-400/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Metric pill */}
                <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {t.statLabel}
                    </span>
                    <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
                      {t.stat}
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors" />
                </div>

                {/* Clean Rating Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>5.0 Verified Engagement</span>
                </div>

                {/* Content Quote */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/70 dark:border-slate-800/70">
                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-slate-200 dark:border-slate-700 shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}, <span className="font-semibold text-slate-700 dark:text-slate-300">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
