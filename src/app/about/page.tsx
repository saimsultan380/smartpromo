import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "About Our Firm | Leadership & Fiduciary Standards",
  description:
    "Learn about Doxo Promo, our licensed CPAs, CFAs, and fiduciary commitment to providing enterprise financial architecture, audit defense, and tax optimization.",
  alternates: {
    canonical: "https://doxopromo.com/about/",
  },
  openGraph: {
    title: "About Our Firm | Doxo Promo",
    description:
      "Combining CPA rigor with modern executive advisory. Discover our leadership team, core values, and track record of advising client capital.",
    url: "https://doxopromo.com/about/",
    siteName: "Doxo Promo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Firm | Doxo Promo",
    description:
      "Combining CPA rigor with modern executive advisory. Discover our leadership team, core values, and track record.",
  },
};

export default function AboutPage() {
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
        name: "About",
        item: "https://doxopromo.com/about/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutView />
    </>
  );
}
