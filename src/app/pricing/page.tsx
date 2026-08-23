"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Lock,
  Clock,
  Award,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  PRICING_PACKAGES,
  PRICING_COMPARISON_MATRIX,
  SITE_CONFIG,
  DetailedPricingPackage,
} from "@/data/content";

export default function PricingPage() {
  const [billingMode, setBillingMode] = useState<"onetime" | "monthly" | "annual">("onetime");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("corporate-tax-strategy");

  const handleOpenConsultation = (packageId: string = "custom-quote") => {
    setSelectedPackage(packageId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Glassmorphic Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation("pricing-nav")} />

      <main className="flex-1">
        {/* Page Hero Header with Breadcrumbs */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-xs font-semibold text-slate-500 mb-2">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-600 font-bold">Pricing</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              Transparent Pricing
            </h1>

            <div className="space-y-1 max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl font-bold text-slate-800">
                Scalable Financial Solutions
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Select the level of support that aligns with your current operational needs and growth trajectory.
              </p>
            </div>

            {/* Interactive Billing Mode Selector */}
            <div className="pt-6 flex items-center justify-center">
              <div className="p-1.5 rounded-2xl bg-slate-100 border border-slate-200 inline-flex flex-wrap items-center justify-center gap-1 shadow-inner">
                <button
                  type="button"
                  onClick={() => setBillingMode("onetime")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    billingMode === "onetime"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  One-Time / Project Setup
                </button>

                <button
                  type="button"
                  onClick={() => setBillingMode("monthly")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    billingMode === "monthly"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Monthly Retainer
                </button>

                <button
                  type="button"
                  onClick={() => setBillingMode("annual")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    billingMode === "annual"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>Annual Retainer</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold uppercase">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Pricing Packages Bento Grid */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg: DetailedPricingPackage) => {
              const price =
                billingMode === "onetime"
                  ? pkg.priceOneTime
                  : billingMode === "monthly"
                  ? `${pkg.priceMonthly} / mo`
                  : `${pkg.priceAnnual} / mo`;

              const priceSuffix =
                billingMode === "onetime" ? "/ one-time" : billingMode === "annual" ? "billed annually" : "monthly";

              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                    pkg.isPopular
                      ? "bg-white border-2 border-blue-600 shadow-2xl shadow-blue-500/10 lg:-translate-y-2"
                      : "bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300"
                  }`}
                >
                  {/* Popular Floating Badge */}
                  {pkg.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-md whitespace-nowrap">
                      Most Selected Solution
                    </div>
                  )}

                  <div>
                    {/* Title & Turnaround */}
                    <div className="space-y-1.5 mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {pkg.name}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-xs text-blue-700 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>{pkg.turnaround}</span>
                      </div>
                    </div>

                    {/* Price Header - Single Line Layout */}
                    <div className="mb-5 pb-5 border-b border-slate-100">
                      <div className="flex items-baseline flex-wrap gap-1.5">
                        <span className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight whitespace-nowrap">
                          {price}
                        </span>
                        {billingMode === "onetime" && (
                          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                            {priceSuffix}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-2 min-h-[36px] leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-2.5 mb-8">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        What&apos;s Included:
                      </div>
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div>
                    <button
                      onClick={() => handleOpenConsultation(pkg.id)}
                      className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group ${
                        pkg.isPopular
                          ? "bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25"
                          : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-2.5 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      <span>CPA Supervised & NDA Protected</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deliverables Comparison Matrix */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Feature Comparison</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Compare Deliverables Across All 6 Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Detailed side-by-side scope transparency.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/80 overflow-x-auto shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <th className="py-4 px-4">Capability & Scope</th>
                    <th className="py-4 px-3 text-center">Basic Setup</th>
                    <th className="py-4 px-3 text-center">Bookkeeping</th>
                    <th className="py-4 px-3 text-center">Tax Prep</th>
                    <th className="py-4 px-3 text-center text-blue-600 bg-blue-50/50">
                      Corp Tax
                    </th>
                    <th className="py-4 px-3 text-center">Virtual CFO</th>
                    <th className="py-4 px-3 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {PRICING_COMPARISON_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-800">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.basic ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.bookkeeping ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.tax ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center bg-blue-50/30">
                        {row.corpTax ? (
                          <Check className="w-4 h-4 text-blue-600 mx-auto font-bold" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.cfo ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.enterprise ? (
                          <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Trust Guarantees Bar */}
        <section className="py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">AICPA Supervised</h4>
                  <p className="text-[11px] text-slate-500">Every return CPA-reviewed</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Audit Shield Guarantee</h4>
                  <p className="text-[11px] text-slate-500">100% IRS defense liaison</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">SOC-2 Vault Security</h4>
                  <p className="text-[11px] text-slate-500">256-bit encrypted data</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Guaranteed 3-Day Close</h4>
                  <p className="text-[11px] text-slate-500">Speed without accuracy loss</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need a Custom Quote? Section */}
        <section className="relative py-20 bg-white text-slate-900 overflow-hidden border-t border-slate-200/80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Need a Custom Quote?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Every business is unique. Contact us to design a tailored accounting and advisory package perfectly suited to your operational complexity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => handleOpenConsultation("custom-enterprise-quote")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Interactive Consultation / Proposal Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedPackage}
      />
    </div>
  );
}
