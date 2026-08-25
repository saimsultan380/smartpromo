"use client";

import Link from "next/link";
import { RefreshCcw, ShieldAlert, ChevronRight } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/data/content";

export default function RefundPolicyView() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 pb-12 text-center bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Refund &amp; Cancellation Policy
            </h1>
            <nav className="text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Refund Policy</span>
            </nav>
            <p className="text-xs text-slate-500 pt-2">
              Last Updated: January 2026 | Transparent Fiduciary Standard
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-4">
              <RefreshCcw className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div className="space-y-1">
                <h2 className="text-base font-bold text-slate-900 m-0">
                  Transparent Billing &amp; Satisfaction Guarantee
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 m-0">
                  At <strong>{SITE_CONFIG.name}</strong>, we stand behind the quality, accuracy, and rigorous execution of our financial advisory services. This policy clearly defines our terms for cancellations, service adjustments, and refunds.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                1. Monthly Recurring Subscriptions (Bookkeeping &amp; Fractional CFO)
              </h2>
              <p>
                For clients on monthly retainer plans (Basic Bookkeeping, Pro Bookkeeping, Virtual CFO Advisory):
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Cancellation:</strong> You may cancel your recurring monthly service at any time with a 15-day written notice prior to your next billing cycle.
                </li>
                <li>
                  <strong>Refunds:</strong> Once a monthly cycle has commenced and work (reconciliations, payroll runs, financial reporting) has been performed, the fee for that billing cycle is non-refundable. However, no subsequent months will be charged following cancellation.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                2. One-Time Projects &amp; Tax Preparation Engagements
              </h2>
              <p>
                For standalone tax filings, historical book cleanup, entity setup, or debt financing advisory:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Pre-Work Cancellation:</strong> If you cancel within 48 hours of engagement and before our advisory team has initiated document review or reconciliation, a 100% refund of your initial deposit will be issued.
                </li>
                <li>
                  <strong>Work-in-Progress:</strong> If work has already commenced, fees will be prorated based on recorded hours and completed milestones, with any unspent retainer returned.
                </li>
                <li>
                  <strong>Completed Deliverables:</strong> Once tax returns have been finalized and filed with the IRS/state, or finalized audit books delivered, project fees are strictly non-refundable due to the specialized professional labor expended.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                3. Accuracy &amp; Reconciliation Guarantee
              </h2>
              <p>
                If an error in bookkeeping calculation or tax preparation is attributable solely to {SITE_CONFIG.name}, we will immediately rectify the discrepancy, submit amended schedules at zero additional charge, and reimburse any directly resulting IRS or state administrative late penalties.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                4. How to Request a Cancellation or Refund
              </h2>
              <p>
                To request an adjustment, billing review, or cancellation, please email our billing department with your entity name and invoice number:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
                <p><strong>Firm:</strong> {SITE_CONFIG.name}</p>
                <p><strong>Billing Inquiries:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-600 hover:underline">{SITE_CONFIG.email}</a></p>
                <p><strong>Direct Line:</strong> <a href={`tel:${SITE_CONFIG.phone}`} className="text-blue-600 hover:underline">{SITE_CONFIG.phone}</a></p>
                <p><strong>Address:</strong> {SITE_CONFIG.address}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
