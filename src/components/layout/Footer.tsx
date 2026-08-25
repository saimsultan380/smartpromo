import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-850">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m3 3 7 7-7 7" />
                  <path d="m13 3 7 7-7 7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-tight">
                  Doxo Promo
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Comprehensive financial accounting, corporate tax strategy, and proactive bookkeeping services ensuring long-term fiscal stability.
            </p>

            <div className="pt-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                We Accept:
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="bg-white rounded p-0.5 border border-slate-700 flex items-center justify-center shadow-xs overflow-hidden h-7 w-11">
                  <Image
                    src="/visa.svg"
                    alt="Visa"
                    width={44}
                    height={28}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded p-0.5 border border-slate-700 flex items-center justify-center shadow-xs overflow-hidden h-7 w-11">
                  <Image
                    src="/mastercard.svg"
                    alt="Mastercard"
                    width={44}
                    height={28}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded p-0.5 border border-slate-700 flex items-center justify-center shadow-xs overflow-hidden h-7 w-11">
                  <Image
                    src="/amex.svg"
                    alt="American Express"
                    width={44}
                    height={28}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded p-0.5 border border-slate-700 flex items-center justify-center shadow-xs overflow-hidden h-7 w-11">
                  <Image
                    src="/discover.svg"
                    alt="Discover"
                    width={44}
                    height={28}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded p-0.5 border border-slate-700 flex items-center justify-center shadow-xs overflow-hidden h-7 w-11">
                  <Image
                    src="/bank-transfer.svg"
                    alt="Bank Wire Transfer"
                    width={44}
                    height={28}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-blue-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/pricing/" className="hover:text-blue-400 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-blue-400 transition-colors">About Firm</Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-blue-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Policies
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/privacy-policy/" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions/" className="hover:text-blue-400 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy/" className="hover:text-blue-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-400">Phone:</span>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-blue-400 hover:underline font-medium">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-400">Email:</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-400 hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-slate-400 shrink-0">Address:</span>
                <span className="text-slate-300">{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{SITE_CONFIG.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Doxo Promo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
