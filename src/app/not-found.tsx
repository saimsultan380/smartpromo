import Link from "next/link";
import { ArrowLeft, Home, FileText, DollarSign, Users, Mail, PhoneCall } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/data/content";

export const metadata = {
  title: "404 - Page Not Found | Doxo Promo LLC",
  description: "The page you requested could not be found. Return to Doxo Promo LLC home or explore our financial advisory services.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  const quickLinks = [
    { label: "Home Overview", href: "/", icon: Home, desc: "Return to the main page" },
    { label: "Financial Services", href: "/services/", icon: FileText, desc: "CFO advisory, tax & bookkeeping" },
    { label: "Transparent Pricing", href: "/pricing/", icon: DollarSign, desc: "Packages & deliverables matrix" },
    { label: "About Our Firm", href: "/about/", icon: Users, desc: "Leadership, credentials & values" },
    { label: "Contact Directory", href: "/contact/", icon: Mail, desc: "Get in touch with a senior advisor" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Search Engine Directives: Do not index 404 pages */}
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <TopBar />
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>404 Error: Resource Not Located</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900">
              Page Not Found
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              The page you are looking for may have been relocated, removed, or the URL might have an incorrect address.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Return to Homepage</span>
            </Link>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-all shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>Direct Hotline: {SITE_CONFIG.phone}</span>
            </a>
          </div>

          {/* Helpful Navigation Grid */}
          <div className="pt-8 border-t border-slate-200 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
              Helpful Directory Navigation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all group flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {link.label}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {link.desc}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
