import type { Metadata } from "next";
import ServicesView from "@/components/views/ServicesView";
import { SERVICE_FAQS } from "@/data/content";

export const metadata: Metadata = {
  title: "Financial & Advisory Services | Bookkeeping, Tax, CFO & Capital",
  description:
    "Comprehensive corporate financial services: Fractional CFO advisory, corporate tax planning, SBA loan consultation, and GAAP bookkeeping for high-growth firms.",
  alternates: {
    canonical: "https://doxopromo.com/services/",
  },
  openGraph: {
    title: "Financial & Advisory Services | Doxo Promo LLC",
    description:
      "Explore our 6 financial pillars: Corporate Tax Optimization, Fractional CFO, SBA & Capital Structuring, Enterprise Bookkeeping, Audit Strategy, and Entity Formation.",
    url: "https://doxopromo.com/services/",
    siteName: "Doxo Promo LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial & Advisory Services | Doxo Promo LLC",
    description:
      "Explore our 6 financial pillars: Corporate Tax Optimization, Fractional CFO, SBA & Capital Structuring, and Enterprise Bookkeeping.",
  },
};

export default function ServicesPage() {
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
        name: "Services",
        item: "https://doxopromo.com/services/",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SERVICE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesView />
    </>
  );
}
