import type { Metadata } from "next";
import RefundPolicyView from "@/components/views/RefundPolicyView";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Transparent Billing Guarantee",
  description:
    "Review the refund, cancellation, and billing policies of Doxo Promo. Transparent terms for monthly bookkeeping, fractional CFO retainers, and tax filings.",
  alternates: {
    canonical: "https://doxopromo.com/refund-policy/",
  },
  openGraph: {
    title: "Refund Policy | Doxo Promo",
    description:
      "Review the refund, cancellation, and billing policies of Doxo Promo. Transparent terms for advisory retainers.",
    url: "https://doxopromo.com/refund-policy/",
    siteName: "Doxo Promo",
    locale: "en_US",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicyView />;
}
