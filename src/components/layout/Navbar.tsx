"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight, ChevronRight, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";
import LogoMark from "@/components/brand/LogoMark";

interface NavbarProps {
  onOpenConsultation?: (service?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleAction = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      router.push("/contact/");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Pricing", href: "/pricing/" },
    { label: "About Firm", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <LogoMark className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-tight">
                Doxo Promo
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                Precision Financial Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && (pathname === link.href.slice(0, -1) || pathname.startsWith(link.href)));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-1 ${
                    isActive
                      ? "text-blue-900 border-b-2 border-blue-900"
                      : "text-slate-700 hover:text-blue-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleAction}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleAction}
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-slate-200 mt-3 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAction();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium text-center text-sm shadow-md"
              >
                Schedule Strategic Consultation
              </button>
              <div className="text-center text-xs text-slate-500 pt-1">
                Direct: {SITE_CONFIG.phone}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
