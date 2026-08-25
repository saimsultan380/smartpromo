import type { Metadata } from "next";
import PrivacyPolicyView from "@/components/views/PrivacyPolicyView";

export const metadata: Metadata = {
  title: "Privacy Policy | Fiduciary Data Protection & Confidentiality",
  description:
    "Review the privacy policy and data governance practices of Doxo Promo. We protect your accounting ledgers, tax documents, and corporate filings under strict confidentiality standards.",
  alternates: {
    canonical: "https://doxopromo.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Doxo Promo",
    description:
      "Review the privacy policy and data governance practices of Doxo Promo. Comprehensive fiduciary confidentiality.",
    url: "https://doxopromo.com/privacy-policy/",
    siteName: "Doxo Promo",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
