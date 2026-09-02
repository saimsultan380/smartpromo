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
                  One-Time Services Only
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 m-0">
                  At <strong>{SITE_CONFIG.name}</strong>, all engagements are <strong>one-time project-based services</strong>. We do <strong>not</strong> offer recurring subscriptions, monthly retainers, or automatic renewals. You are billed only for the specific engagement you approve. This policy defines our terms for cancellations and refunds.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                1. Service Model
              </h2>
              <p>
                Every service we provide—including bookkeeping cleanup, tax preparation, financial advisory, entity setup, and loan consultation—is structured as a one-time engagement with a defined scope and fixed or project-based fee. There are no auto-renewals and no recurring charges after the engagement is complete.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                2. Cancellation &amp; Refund Terms
              </h2>
              <p>
                For one-time projects and tax preparation engagements:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Pre-Work Cancellation:</strong> If you cancel within 48 hours of engagement and before our advisory team has initiated document review or project work, a 100% refund of your payment will be issued.
                </li>
                <li>
                  <strong>Work-in-Progress:</strong> If work has already commenced, fees will be prorated based on recorded hours and completed milestones, with any unused portion of your payment returned.
                </li>
                <li>
                  <strong>Completed Deliverables:</strong> Once tax returns have been finalized and filed with the IRS/state, or finalized books and deliverables have been delivered, project fees are strictly non-refundable due to the specialized professional labor expended.
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
