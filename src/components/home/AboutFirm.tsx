"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AboutFirmProps {
  onOpenConsultation: () => void;
}

export default function AboutFirm({ onOpenConsultation }: AboutFirmProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&auto=format&fit=crop&q=80"
                  alt="Doxo Promo Leadership Team Partnering With Clients"
                  width={800}
                  height={560}
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Action */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
                About Our Firm
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 tracking-tight leading-tight">
              Integrity, Precision, and Partnership that Scales
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                At <strong className="text-slate-900">Doxo Promo</strong>, we don&apos;t just crunch numbers; we provide the clarity required to make high-stakes business decisions. Whether you are seeking meticulous bookkeeping support, strategic tax solutions, or consultancy advisory services at scale, we operate as an extension of your leadership team.
              </p>
              <p>
                Our commitment is simple: absolute accuracy, transparent reporting, and dedicated advisory that puts you firmly in control of your financial future.
              </p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/about/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold text-sm tracking-wide transition-all shadow-sm"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
