"use client";

import Link from "next/link";
import { FileCheck, Shield, ChevronRight } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/data/content";

export default function TermsView() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 pb-12 text-center bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Terms &amp; Conditions
            </h1>
            <nav className="text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Terms &amp; Conditions</span>
            </nav>
            <p className="text-xs text-slate-500 pt-2">
              Last Updated: January 2026 | Advisory Service Agreement
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-4">
              <FileCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div className="space-y-1">
                <h2 className="text-base font-bold text-slate-900 m-0">
                  Engagement Overview
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 m-0">
                  By accessing the <strong>{SITE_CONFIG.name}</strong> website or retaining our professional advisory, bookkeeping, tax preparation, or CFO consulting services, you agree to comply with the terms and conditions outlined below.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                1. Scope of Professional Services
              </h2>
              <p>
                <strong>{SITE_CONFIG.name}</strong> provides specialized financial accounting, tax strategy formulation, bookkeeping, fractional CFO consulting, and commercial loan packaging. The exact deliverables, timelines, and fees for any engagement will be specified in an individual Statement of Work (SOW) or Engagement Letter.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                2. Client Responsibilities &amp; Document Accuracy
              </h2>
              <p>
                The accuracy and timeliness of our deliverables depend directly on the completeness of documentation provided by the client. The client agrees to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Provide accurate, un-manipulated accounting records, bank statements, receipts, and revenue summaries.</li>
                <li>Review draft tax returns and financial filings prior to final submission to regulatory authorities.</li>
                <li>Notify <strong>{SITE_CONFIG.name}</strong> promptly of any material changes in corporate structure, ownership, or bank relationships.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                3. Fees, Billing &amp; Retainers
              </h2>
              <p>
                Service packages and customized consulting are billed according to the agreed pricing schedule:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Recurring Subscriptions / Retainers:</strong> Monthly bookkeeping and Virtual CFO services are billed on a recurring monthly cycle in advance.
                </li>
                <li>
                  <strong>One-Time Filings &amp; Projects:</strong> Tax returns, multi-year cleanups, and loan advisory packages require upfront deposit with remaining balance due upon delivery of final work papers.
                </li>
                <li>
                  <strong>Late Payments:</strong> Accounts past 30 days delinquent may be subject to temporary service pauses and interest fees of 1.5% per month.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                4. Intellectual Property &amp; Work Product
              </h2>
              <p>
                Upon full payment of all fees, the client owns all final deliverables, including completed tax returns, financial statements, and custom forecast models. <strong>{SITE_CONFIG.name}</strong> retains all proprietary rights to internal templates, methodologies, reconciliation engines, and software tools utilized during the engagement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                5. Limitation of Liability
              </h2>
              <p>
                While <strong>{SITE_CONFIG.name}</strong> exercises high professional care, our aggregate liability arising out of any engagement shall not exceed the total fees paid by the client to {SITE_CONFIG.name} for the specific service giving rise to the claim during the preceding six (6) months. We are not liable for penalties resulting from inaccurate information provided by the client.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms &amp; Conditions and any engagement agreements shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any legal proceeding shall be instituted exclusively in the state or federal courts located in Fort Bend County or Harris County, Texas.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                7. Questions &amp; Legal Notices
              </h2>
              <p>
                For legal inquiries or notices regarding these terms, please contact:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
                <p><strong>Firm:</strong> {SITE_CONFIG.name}</p>
                <p><strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-600 hover:underline">{SITE_CONFIG.email}</a></p>
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
