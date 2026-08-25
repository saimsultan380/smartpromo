"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function ServicesView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("tax-planning");

  const services = [
    {
      id: "tax-planning",
      title: "Tax Planning & Preparation",
      description:
        "Navigating tax codes requires exactness. We optimize corporate tax liabilities, handle individual high-net-worth filings, and provide proactive year-round strategies to keep you compliant and minimize exposure.",
    },
    {
      id: "bookkeeping-payroll",
      title: "Bookkeeping & Payroll",
      description:
        "Maintaining financial hygiene. Our meticulous bookkeepers manage your ledgers, accounts payable/receivable, reconciliations, and payroll processing, providing perfectly clean financial reports every month.",
    },
    {
      id: "virtual-cfo",
      title: "Virtual CFO Services",
      description:
        "Executive guidance. We deliver budgeting, risk management, predictive cash-flow modeling, and high-level strategy usually reserved for Fortune 500 boards, without the cost of a full-time executive.",
    },
    {
      id: "loan-consulting",
      title: "Loan Consulting",
      description:
        "Expand with confidence. We simplify loan approvals by assisting with the vast documentation, business plan structuring, and lender negotiations necessary to secure critical capital.",
    },
    {
      id: "audit-strategy",
      title: "Audit Strategy",
      description:
        "Ensure total transparency. We help internal teams implement bulletproof accounting practices and can act as liaisons during intense external audits from regulatory authorities.",
    },
    {
      id: "business-formation",
      title: "Business Formation",
      description:
        "Build on a solid foundation. Our team advises on the best corporate structuring (Entity Structuring, S-Corp, C-Corp) for asset protection and tax minimization from day one.",
    },
  ];

  const handleOpenConsultation = (serviceId: string = "general-services") => {
    setSelectedService(serviceId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation("services-nav")} />

      <main className="flex-1">
        {/* Page Hero Header with Breadcrumbs */}
        <section className="pt-16 pb-12 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Financial Services
            </h1>
            <nav className="text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Services</span>
            </nav>
          </div>
        </section>

        {/* Section: WHAT WE DO & 6 Cards Grid */}
        <section className="pt-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight">
              Comprehensive Advisory &amp; Accounting
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Doxo Promo provides full-spectrum financial tracking, compliance management, and strategic capital advisory.
            </p>
          </div>

          {/* 6 Services Grid (3 columns x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleOpenConsultation(service.id)}
                className="group cursor-pointer rounded-2xl p-8 bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="space-y-3">
                  {/* Title with Blue Square Indicator */}
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-xs bg-blue-600 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4.5">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
