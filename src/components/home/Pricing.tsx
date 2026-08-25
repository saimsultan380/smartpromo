"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

interface PricingProps {
  onSelectTier?: (tierId: string) => void;
}

export default function Pricing({ onSelectTier }: PricingProps) {
  const pricingCards = [
    {
      id: "bookkeeping",
      title: "Bookkeeping Services",
      price: "$50 - $100",
      period: "/ user/hour",
      features: ["Ledger management", "Clean financial reporting"],
    },
    {
      id: "corporate-tax",
      title: "Corporate Tax",
      price: "$300 - $600",
      period: "/ one-time",
      features: ["Year-round tax planning", "Compliance review"],
    },
    {
      id: "virtual-cfo",
      title: "Virtual CFO",
      price: "$600 - $1,000",
      period: "/ one-time",
      features: ["Predictive cash-flow modeling", "Executive guidance"],
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
              Transparent Pricing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Scalable Financial Solutions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Expert accounting and advisory packages tailored to your business needs.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {pricingCards.map((tier) => (
            <div
              key={tier.id}
              onClick={() => onSelectTier && onSelectTier(tier.id)}
              className="relative cursor-pointer flex flex-col justify-between rounded-2xl p-8 sm:p-9 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              <div>
                {/* Tier Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                  {tier.title}
                </h3>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5 flex-nowrap">
                    <span className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight whitespace-nowrap">
                      {tier.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Pricing Plans CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/pricing/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs"
          >
            <span>VIEW ALL PRICING PLANS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
