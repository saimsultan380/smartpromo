import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";
import { SITE_CONFIG } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Our Advisory Team | Confidential Financial Consultation",
  description:
    "Connect directly with senior CPAs and financial advisors at Doxo Promo. Request a confidential strategy briefing covered under strict NDA.",
  alternates: {
    canonical: "https://doxopromo.com/contact/",
  },
  openGraph: {
    title: "Contact Our Advisory Team | Doxo Promo",
    description:
      "Initiate a confidential discussion with our senior CPAs and corporate financial advisors. Direct phone, email, and consultation intake.",
    url: "https://doxopromo.com/contact/",
    siteName: "Doxo Promo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Our Advisory Team | Doxo Promo",
    description:
      "Initiate a confidential discussion with our senior CPAs and corporate financial advisors.",
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: "https://doxopromo.com/contact/",
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Doxo Promo",
    url: "https://doxopromo.com/contact/",
    description:
      "Initiate a confidential financial strategy briefing with licensed CPAs and senior advisors.",
    mainEntity: {
      "@type": "AccountingService",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "18026 BARTON RIDGE LN",
        addressLocality: "Richmond",
        addressRegion: "TX",
        postalCode: "77407",
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactView />
    </>
  );
}
