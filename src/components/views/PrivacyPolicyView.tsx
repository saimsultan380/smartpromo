"use client";

import Link from "next/link";
import { ShieldCheck, Lock, FileText, ChevronRight } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/data/content";

export default function PrivacyPolicyView() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-16 pb-12 text-center bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Privacy Policy
            </h1>
            <nav className="text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Privacy Policy</span>
            </nav>
            <p className="text-xs text-slate-500 pt-2">
              Last Updated: January 2026 | Fiduciary Compliance Standard
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div className="space-y-1">
                <h2 className="text-base font-bold text-slate-900 m-0">
                  Our Fiduciary Data Commitment
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 m-0">
                  At <strong>{SITE_CONFIG.name}</strong>, we treat your business records, tax filings, financial statements, and private corporate data with strict institutional-grade confidentiality. We never sell, monetize, or share your proprietary information.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                1. Information We Collect
              </h2>
              <p>
                When you engage <strong>{SITE_CONFIG.name}</strong> for accounting, bookkeeping, tax preparation, or fractional CFO advisory services, we collect information necessary to perform our engagement, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Contact & Entity Details:</strong> Legal business names, entity structures, authorized contact persons, corporate email addresses, phone numbers, and physical business addresses.
                </li>
                <li>
                  <strong>Financial & Tax Data:</strong> General ledgers, trial balances, bank feeds, payroll records, previous years’ tax returns, W-2/1099 statements, and corporate asset documentation.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing addresses and credit card/ACH payment authorizations processed securely through PCI-DSS compliant payment gateways.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                2. How We Use Your Information
              </h2>
              <p>
                We use collected information strictly to deliver authoritative financial services, such as:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Performing GAAP double-entry bookkeeping and bank reconciliations.</li>
                <li>Preparing federal, state, and local business tax returns and estimated payments.</li>
                <li>Formulating financial projections, CFO runway models, and debt financing packages.</li>
                <li>Communicating critical filing deadlines, audit inquiries, and advisory insights.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                3. Confidentiality & Security Measures
              </h2>
              <p>
                We maintain rigorous administrative, technical, and physical safeguards:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Encryption:</strong> All electronic data transmitted through our portals is encrypted using 256-bit SSL/TLS protocols.
                </li>
                <li>
                  <strong>Access Controls:</strong> Access to client files is restricted strictly to assigned CPAs, accountants, and senior advisors working directly on your portfolio.
                </li>
                <li>
                  <strong>Non-Disclosure:</strong> All staff and advisors are bound by strict non-disclosure and confidentiality agreements.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                4. Third-Party Disclosures
              </h2>
              <p>
                We do not sell, rent, or trade your personal or business information. Disclosures are made only to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Government tax authorities (e.g., IRS, state revenue departments) upon your explicit authorization and signature.</li>
                <li>Secure financial software vendors (e.g., QuickBooks, payroll processors) necessary for service fulfillment.</li>
                <li>Comply with legal obligations, subpoenas, or court orders when mandated by applicable law.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                5. Data Retention & Client Rights
              </h2>
              <p>
                In compliance with professional accounting record-retention standards, we retain financial records for the duration required by federal and state regulatory authorities (typically 7 years). You have the right to request copies of your finished work papers, filed returns, and generated financial reports at any time.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                6. Contact Privacy Officer
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or our fiduciary data practices, please reach out directly:
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
