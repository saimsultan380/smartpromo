import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  title: "Smart Promo LLC | Precision Accounting & Strategic Financial Growth",
  description:
    "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation for high-growth businesses and corporations.",
  keywords: [
    "CFO Advisory",
    "Corporate Tax Planning",
    "Enterprise Bookkeeping",
    "SBA Loan Consultation",
    "Houston Financial Advisors",
    "Smart Promo LLC",
  ],
  authors: [{ name: "Smart Promo LLC" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
