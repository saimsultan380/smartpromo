"use client";

import {
  TrendingUp,
  ShieldCheck,
  Landmark,
  Layers,
  ArrowRight,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/content";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

const iconMap = {
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  Landmark: Landmark,
  Layers: Layers,
};

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Strategic Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineered for High-Growth & Enterprise Scale
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            We don&apos;t just balance debits and credits. We build defensible balance sheets, harvest tax incentives, and model executive capital strategies.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || TrendingUp;

            return (
              <div
                key={service.id}
                className="group relative p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Metric Chip */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700">
                      {service.metrics}
                    </span>
                  </div>

                  {/* Badge & Title */}
                  <div className="space-y-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      {service.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Tagline & Detailed Description */}
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Capabilities Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200/70 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group/btn shadow-sm"
                >
                  <span>Request {service.title} Briefing</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
