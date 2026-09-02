import type { Metadata } from "next";
import RefundPolicyView from "@/components/views/RefundPolicyView";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Transparent Billing Guarantee",
  description:
    "Review the refund and cancellation policies of Doxo Promo. All services are one-time engagements with no recurring subscriptions or monthly retainers.",
  alternates: {
    canonical: "https://doxopromo.com/refund-policy/",
  },
  openGraph: {
    title: "Refund Policy | Doxo Promo",
    description:
      "Review the refund and cancellation policies of Doxo Promo. One-time services only—no recurring billing.",
    url: "https://doxopromo.com/refund-policy/",
    siteName: "Doxo Promo",
    locale: "en_US",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicyView />;
}
