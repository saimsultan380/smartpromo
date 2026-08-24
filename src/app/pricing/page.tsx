import type { Metadata } from "next";
import PricingView from "@/components/views/PricingView";

export const metadata: Metadata = {
  title: "Transparent Pricing & Deliverables | Scalable Financial Packages",
  description:
    "Explore transparent pricing packages for bookkeeping setup, corporate tax strategy, fractional CFO advisory, and enterprise loan consultation.",
  alternates: {
    canonical: "https://doxopromo.com/pricing/",
  },
  openGraph: {
    title: "Transparent Pricing & Deliverables | Doxo Promo LLC",
    description:
      "Scalable financial solutions with transparent deliverables. Compare bookkeeping, tax preparation, fractional CFO, and enterprise advisory packages.",
    url: "https://doxopromo.com/pricing/",
    siteName: "Doxo Promo LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing & Deliverables | Doxo Promo LLC",
    description:
      "Scalable financial solutions with transparent deliverables. Compare bookkeeping, tax preparation, fractional CFO, and enterprise advisory packages.",
  },
};

export default function PricingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://doxopromo.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pricing",
        item: "https://doxopromo.com/pricing/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PricingView />
    </>
  );
}
