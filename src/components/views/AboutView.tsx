"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function AboutView() {
  const [modalOpen, setModalOpen] = useState(false);

  const coreValues = [
    {
      id: "integrity-first",
      title: "Integrity First",
      description:
        "We treat our clients' capital and data with the highest ethical boundaries and standards of privacy in the industry.",
    },
    {
      id: "surgical-precision",
      title: "Surgical Precision",
      description:
        "Accounting leaves no room for approximations. Our systems ensure every cent is tracked, accounted for, and documented correctly.",
    },
    {
      id: "long-term-partnership",
      title: "Long-term Partnership",
      description:
        "We don't just file taxes once a year; we serve as active, year-round partners dedicated entirely to the upward trajectory of your firm.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Header */}
      <Navbar onOpenConsultation={() => setModalOpen(true)} />

      <main className="flex-1">
        {/* Page Hero Header with Breadcrumbs */}
        <section className="pt-16 pb-12 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              About The Firm
            </h1>
            <nav className="text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">About</span>
            </nav>
          </div>
        </section>

        {/* Section 1: Narrative & Visual Split */}
        <section className="pt-6 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
                  Reliability &amp; Results
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-tight">
                Shaping Your Financial Possibilities With Utmost Precision
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-slate-900">Doxo Promo</strong> acts as an essential pillar for businesses navigating complicated financial ecosystems. We combine decades of CPA expertise with modern advisory strategies to streamline loan approvals, enhance daily bookkeeping, and minimize tax burdens.
                </p>
                <p>
                  We are a firm rooted in trust. Whether you are an emerging startup seeking commercial funding or an established enterprise requiring airtight accounting, we engineer success through transparency and rigorous analysis.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&auto=format&fit=crop&q=80"
                    alt="Doxo Promo Business Advisors Handshake in Executive Office"
                    width={800}
                    height={560}
                    priority
                    className="w-full h-[380px] sm:h-[460px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Core Values */}
        <section className="pt-8 pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {coreValues.map((val) => (
              <div
                key={val.id}
                className="rounded-2xl p-8 bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="space-y-3">
                  {/* Title with Blue Square Indicator */}
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-xs bg-blue-600 mt-2 shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {val.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4.5">
                    {val.description}
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
        defaultService="about-inquiry"
      />
    </div>
  );
}
