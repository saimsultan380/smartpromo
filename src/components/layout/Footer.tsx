import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top Value / Trust Proof Bar - Crisp White with prominent top divider line */}
      <div className="bg-white text-slate-900 border-t-2 border-slate-200 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">AICPA Supervised Standards</h4>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  All tax planning, financial modeling, and books are reviewed by licensed US Certified Public Accountants.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Institutional Data Vault</h4>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  SOC-2 Type II compliant 256-bit encryption with zero-knowledge ledger integrations and MFA access control.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Audit Shield Guarantee</h4>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  100% full-representation defense before IRS and state taxing authorities on all prepared returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white font-black text-lg">
                DP
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-white">
                  Doxo Promo <span className="text-blue-400 font-medium text-xs px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800 ml-1">LLC</span>
                </span>
                <p className="text-[11px] text-slate-400">Precision Financial Growth & Advisory</p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We empower high-growth startups, established corporations, and mid-market enterprises with executive-grade bookkeeping, proactive tax architecture, fractional CFO strategy, and non-dilutive loan consultation.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Accepted Secure Payment Methods
              </span>
              <div className="flex items-center gap-2 flex-wrap text-xs text-slate-400">
                <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-mono font-medium text-slate-300">VISA</span>
                <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-mono font-medium text-slate-300">Mastercard</span>
                <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-mono font-medium text-slate-300">AMEX</span>
                <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-mono font-medium text-slate-300">ACH Direct</span>
                <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-mono font-medium text-slate-300">Stripe Wire</span>
              </div>
            </div>
          </div>

          {/* Quick Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Advisory Pillars
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">Fractional CFO Advisory</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">Corporate Tax Optimization</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">SBA & Capital Structuring</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">Enterprise GAAP Bookkeeping</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">13-Week Cash Flow Modeling</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">Audit Strategy & Defense</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">Home Overview</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">Financial Services</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-400 transition-colors">Transparent Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">About Our Firm</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Directory</Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-white hover:underline font-medium">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SITE_CONFIG.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Doxo Promo LLC. All Rights Reserved. Financial advisory services provided in compliance with state & federal regulations.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Inquiry Portal</Link>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">SOC-2 Vault Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
