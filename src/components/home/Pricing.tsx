"use client";

import { useState } from "react";
import { Check, Award, ArrowRight, HelpCircle, Shield } from "lucide-react";
import { PRICING_TIERS } from "@/data/content";

interface PricingProps {
  onSelectTier: (tierId: string) => void;
}

export default function Pricing({ onSelectTier }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Transparent & Scalable Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictable Financial Partnership
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            No surprise hourly billing or hidden overhead. Institutional-grade advisory packaged for growing enterprises.
          </p>

          {/* Billing Frequency Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-semibold cursor-pointer ${
                !isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </span>

            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isAnnual ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
              }`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>

            <span
              className={`text-sm font-semibold flex items-center gap-1.5 cursor-pointer ${
                isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              <span>Annual Retainer</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid - No single top line border, refined 360-degree border & shadow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                  tier.isPopular
                    ? "bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 shadow-2xl shadow-blue-500/10 scale-100 lg:-translate-y-2"
                    : "bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {/* Popular Pill Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Selected by Growth Cos
                  </div>
                )}

                <div>
                  {/* Tier Title & Description */}
                  <div className="space-y-2 mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">
                      {tier.headline}
                    </p>
                  </div>

                  {/* Price display */}
                  <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                        ${price}
                      </span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {tier.billingPeriod}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {isAnnual ? "Billed annually with priority review" : "Billed monthly. Cancel anytime with 30-day notice."}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Deliverables Included:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div>
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 group ${
                      tier.isPopular
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25"
                        : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <p className="text-center text-[10px] text-slate-400 mt-2.5 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3 text-emerald-500" />
                    <span>Includes AICPA Supervised Review</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Enterprise Quote Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Need Multi-Entity or High-Volume Custom Architecture?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Customized scopes available for VC-backed startups, M&A prep, and conglomerates.</p>
            </div>
          </div>

          <button
            onClick={() => onSelectTier("custom-enterprise")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs hover:bg-slate-800 transition-colors"
          >
            Request Custom Scope
          </button>
        </div>
      </div>
    </section>
  );
}
