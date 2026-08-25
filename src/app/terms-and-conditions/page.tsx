import type { Metadata } from "next";
import TermsView from "@/components/views/TermsView";

export const metadata: Metadata = {
  title: "Terms & Conditions | Advisory Engagement Agreement",
  description:
    "Review the terms and conditions governing financial advisory, bookkeeping, corporate tax preparation, and fractional CFO services provided by Doxo Promo.",
  alternates: {
    canonical: "https://doxopromo.com/terms-and-conditions/",
  },
  openGraph: {
    title: "Terms & Conditions | Doxo Promo",
    description:
      "Review the terms and conditions governing financial advisory, bookkeeping, corporate tax preparation, and fractional CFO services provided by Doxo Promo.",
    url: "https://doxopromo.com/terms-and-conditions/",
    siteName: "Doxo Promo",
    locale: "en_US",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsView />;
}
