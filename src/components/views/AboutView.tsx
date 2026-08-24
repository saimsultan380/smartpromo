"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  ArrowRight,
  Award,
  ChevronRight,
  Building2,
  Users,
  PhoneCall,
} from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import {
  CORE_VALUES,
  LEADERSHIP_TEAM,
  TIMELINE_MILESTONES,
  SITE_CONFIG,
} from "@/data/content";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Target: Target,
};

export default function AboutView() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar */}
      <TopBar />

      {/* Main Glassmorphic Header */}
      <Navbar onOpenConsultation={() => setModalOpen(true)} />

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
              <span className="text-blue-600 font-bold">About</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              About The Firm
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Doxo Promo LLC is an essential financial pillar for high-growth enterprises, combining CPA rigor with modern executive advisory.
            </p>
          </div>
        </section>

        {/* Section 1: Executive Narrative & Visual Split */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Reliability & Results</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Shaping Your Financial Possibilities With Utmost Precision
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong>Doxo Promo LLC</strong> acts as an essential pillar for businesses navigating complicated financial ecosystems. We combine decades of CPA expertise with modern advisory strategies to streamline loan approvals, enhance daily bookkeeping, and minimize tax burdens.
                </p>
                <p className="text-sm sm:text-base text-slate-500">
                  We are a firm rooted in trust. Whether you are an emerging startup seeking commercial funding or an established enterprise requiring airtight accounting, we engineer success through transparency and rigorous analysis.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                    $450M+
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-1">
                    Capital Advised & Managed
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                    99.8%
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-1">
                    Audit Defense Accuracy
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all group"
                >
                  <span>Speak with a Partner</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80"
                  alt="Senior Financial Advisors Partnering"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Oversight Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">AICPA Fiduciary Standard</p>
                      <p className="text-[10px] text-slate-500">100% CPA-supervised client portfolios</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Core Values */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>Foundational Principles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Core Values
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                The four non-negotiable operational standards that define every client engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val) => {
                const Icon = iconMap[val.iconName as keyof typeof iconMap] || ShieldCheck;
                return (
                  <div
                    key={val.id}
                    className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                          {val.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {val.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 mb-3">
                        {val.subtitle}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Leadership & Senior Advisory Team Showcase */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Executive Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meet Our Senior Advisory Team
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Direct access to CPAs, CFAs, and commercial underwriters with deep institutional pedigree.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="h-64 overflow-hidden relative bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[11px] font-bold tracking-wider">
                      {member.specialty}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono">
                    {member.credentials}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Firm Milestones Timeline */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Our Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Firm Milestones & Evolution
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Building an enduring legacy of fiduciary trust, loan facilitation, and tax defense.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TIMELINE_MILESTONES.map((m) => (
                <div
                  key={m.year}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-blue-600 font-mono">
                      {m.year}
                    </span>
                    {m.stat && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold">
                        {m.stat}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Closing Strategic Partnership Banner */}
        <section className="relative py-20 bg-white text-slate-900 overflow-hidden border-t border-slate-200/80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Partner with Seasoned Financial Leaders
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Schedule a confidential 30-minute strategic briefing with our Managing Partner to audit your books, tax posture, and capital strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Direct: {SITE_CONFIG.phone}</span>
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
        defaultService="about-inquiry"
      />
    </div>
  );
}
