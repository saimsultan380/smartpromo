"use client";

import Image from "next/image";
import Link from "next/link";
import { TrendingUp, FileText, Briefcase, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const featureCards = [
    {
      id: "cfo-advisory",
      title: "CFO Advisory",
      icon: TrendingUp,
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      topAccent: "from-blue-500 to-indigo-500",
      description:
        "Comprehensive financial insights with a CFO perspective without the overhead. We provide forecasting, budgeting, and actionable intelligence.",
    },
    {
      id: "tax-strategy",
      title: "Tax Strategy",
      icon: FileText,
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
      topAccent: "from-amber-400 to-orange-500",
      description:
        "Proactive tax planning ensures compliance and leverages corporate advantages. We handle preparation, filing, and year-round strategic advisory.",
    },
    {
      id: "loan-consultation",
      title: "Loan Consultation",
      icon: Briefcase,
      iconBg: "bg-rose-50 text-rose-600 border-rose-200",
      topAccent: "from-rose-400 to-pink-500",
      description:
        "We simplify complex loan applications, guiding you through documentation, financial structuring, and application strategy for commercial success.",
    },
  ];

  return (
    <section id="hero" className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Tag / Eyebrow */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
                Trusted Financial Advisors
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Precision Accounting &amp; Strategic Financial Growth
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your strategic partner for enterprise-level Bookkeeping, Tax Optimization, CFO Advisory, and Loan Strategy. We simplify the complex world of finance so you can focus on building your business.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/services/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg"
              >
                <span>EXPLORE SERVICES</span>
              </Link>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm tracking-wide transition-all hover:bg-slate-50"
              >
                <span>SPEAK TO AN ADVISOR</span>
              </button>
            </div>
          </div>

          {/* Right Column: Boardroom Strategy Image */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format&fit=crop&q=80"
                  alt="Financial Advisory Boardroom Strategy Meeting"
                  width={800}
                  height={560}
                  priority
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Clean Feature / Service Cards Row */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={onOpenConsultation}
                className="group relative cursor-pointer p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Colored Border Strip */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${card.topAccent}`}
                />

                <div className="space-y-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center ${card.iconBg} shadow-xs`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Learn More Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
