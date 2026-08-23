"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  TrendingUp,
  Landmark,
  FileCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Clock,
  Briefcase,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  SERVICES_PAGE_DATA,
  ENGAGEMENT_STEPS,
  SERVICE_FAQS,
  SITE_CONFIG,
  ServiceItem,
} from "@/data/content";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  TrendingUp: TrendingUp,
  Landmark: Landmark,
  FileCheck: FileCheck,
  Building2: Building2,
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("tax-planning");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    { id: "all", label: "All Capabilities" },
    { id: "tax", label: "Tax & Audit Defense" },
    { id: "cfo", label: "Fractional CFO" },
    { id: "bookkeeping", label: "Bookkeeping & Payroll" },
    { id: "capital", label: "Loan & Capital" },
    { id: "formation", label: "Entity Formation" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_PAGE_DATA
      : SERVICES_PAGE_DATA.filter((s) => s.category === activeCategory);

  const handleOpenConsultation = (serviceId: string = "general-services") => {
    setSelectedService(serviceId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Glassmorphic Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation("services-nav")} />

      <main className="flex-1">
        {/* Page Hero Header with Breadcrumbs */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-600 dark:text-blue-400 font-bold">Services</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              Financial Services
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Smart Promo LLC provides full-spectrum financial tracking, compliance management, and strategic capital advisory engineered for scaling enterprises.
            </p>
          </div>
        </section>

        {/* Section: WHAT WE DO & Filterable Grid */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>What We Do</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Comprehensive Advisory & Accounting
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Select a specialized focus area or explore our complete suite of financial solutions.
            </p>

            {/* Interactive Category Filter Pills */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 6 Services Bento Grid - Clean, No AI top-line border */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: ServiceItem) => {
              const Icon = iconMap[service.iconName as keyof typeof iconMap] || TrendingUp;

              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between rounded-3xl p-8 bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Icon + Metric Pill */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400">
                        {service.metrics}
                      </span>
                    </div>

                    {/* Category badge & Title */}
                    <div className="space-y-1.5 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {service.badge}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Tagline & Description */}
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature bullet list */}
                    <div className="space-y-2 pt-4 border-t border-slate-200/70 dark:border-slate-800/70 mb-6">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <button
                    onClick={() => handleOpenConsultation(service.id)}
                    className="w-full py-3 px-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-between group/btn shadow-sm"
                  >
                    <span>Consult on {service.title.split(" ")[0]}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Engagement Roadmap Section ("How We Partner") */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Our Process</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                How Our Financial Engagements Work
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                A seamless 4-step deployment methodology ensuring zero disruption to your daily operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ENGAGEMENT_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-blue-500/20">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive FAQ Accordion */}
        <section className="py-20 lg:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Service & Engagement FAQs
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Answers to key operational, compliance, and onboarding questions.
            </p>
          </div>

          <div className="space-y-4">
            {SERVICE_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* High-Impact Closing CTA Banner */}
        <section className="relative py-20 bg-white text-slate-900 overflow-hidden border-t border-slate-200/80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Ready to Upgrade Your Accounting & Financial Strategy?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Schedule a confidential 30-minute strategic consultation with a Senior Financial Advisor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => handleOpenConsultation("services-cta")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Schedule Strategic Consultation</span>
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

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
