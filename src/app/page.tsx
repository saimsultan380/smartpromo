import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";

export const metadata: Metadata = {
  title: "Precision Accounting & Strategic Financial Growth | Doxo Promo",
  description:
    "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation for high-growth businesses and corporations.",
  alternates: {
    canonical: "https://doxopromo.com/",
  },
  openGraph: {
    title: "Precision Accounting & Strategic Financial Growth | Doxo Promo",
    description:
      "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation.",
    url: "https://doxopromo.com/",
    siteName: "Doxo Promo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Accounting & Strategic Financial Growth | Doxo Promo",
    description:
      "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation.",
  },
};

export default function HomePage() {
  return <HomeView />;
}
