"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function PricingView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("corporate-tax-strategy");

  const pricingPackages = [
    {
      id: "basic-bookkeeping-setup",
      name: "Basic Bookkeeping Setup",
      price: "$50+",
      period: "/ one-time",
      features: [
        "Initial chart of accounts setup",
        "Simple financial review",
        "Software integration assistance",
        "Basic expense categorization",
      ],
    },
    {
      id: "bookkeeping-services",
      name: "Bookkeeping Services",
      price: "$50 - $100",
      period: "/ one-time",
      features: [
        "Ledger management",
        "Accounts payable/receivable tracking",
        "Bank reconciliations",
        "Clean financial reporting",
      ],
    },
    {
      id: "standard-tax-prep",
      name: "Standard Tax Prep",
      price: "$100 - $300",
      period: "/ one-time",
      features: [
        "Individual tax preparation",
        "Small business/Schedule C filing",
        "Deduction optimization",
        "Compliance verification",
      ],
    },
    {
      id: "corporate-tax-strategy",
      name: "Corporate Tax Strategy",
      price: "$300 - $600",
      period: "/ one-time",
      features: [
        "Proactive year-round tax planning",
        "Business Entity, S-Corp, & C-Corp optimization",
        "Complex multi-state filings",
        "Estimated tax calculations",
      ],
    },
    {
      id: "virtual-cfo-advisory",
      name: "Virtual CFO Advisory",
      price: "$600 - $1,000",
      period: "/ one-time",
      features: [
        "Predictive cash-flow modeling",
        "Budgeting & risk management",
        "Strategic financial forecasting",
        "Executive board-level guidance",
      ],
    },
    {
      id: "enterprise-loan-strategy",
      name: "Enterprise / Loan Strategy",
      price: "$1,000 - $1,200",
      period: "/ one-time",
      features: [
        "Complex loan approval structuring",
        "Comprehensive enterprise accounting",
        "Audit strategy & regulatory liaison",
        "M&A financial due diligence",
      ],
    },
  ];

  const handleOpenConsultation = (packageId: string = "custom-quote") => {
    setSelectedPackage(packageId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation("pricing-nav")} />

      <main className="flex-1">
        {/* Page Hero Header with Breadcrumbs */}
        <section className="pt-16 pb-10 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Transparent Pricing
            </h1>
            <nav className="text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Pricing</span>
            </nav>
          </div>
        </section>

        {/* Scalable Financial Solutions Header & 6 Pricing Cards Grid */}
        <section className="pt-4 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight">
              Scalable Financial Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Select the level of support that aligns with your current operational needs and growth trajectory.
            </p>
          </div>

          {/* 6 Pricing Cards Grid (3 columns x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="relative flex flex-col justify-between rounded-2xl p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                <div>
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight text-center mb-3">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className="text-3xl sm:text-3.5xl font-black text-blue-900 tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {pkg.period}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleOpenConsultation(pkg.id)}
                  className="w-full py-3.5 px-6 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                >
                  GET STARTED
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Need a Custom Quote? Dark Navy Architecture CTA Section */}
        <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden text-white">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity pointer-events-none"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Need a Custom Quote?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Every business is unique. Contact us to design a tailored accounting and advisory package perfectly suited to your operational complexity.
            </p>

            <div className="pt-4 flex items-center justify-center">
              <button
                onClick={() => handleOpenConsultation("custom-enterprise-quote")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                REQUEST CUSTOM PROPOSAL
              </button>
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
