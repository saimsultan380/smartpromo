import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { SITE_CONFIG } from "@/data/content";

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
  metadataBase: new URL("https://doxopromo.com"),
  title: {
    default: "Doxo Promo LLC | Precision Accounting & Strategic Financial Growth",
    template: "%s | Doxo Promo LLC",
  },
  description:
    "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation for high-growth businesses and corporations.",
  keywords: [
    "CFO Advisory",
    "Corporate Tax Planning",
    "Enterprise Bookkeeping",
    "SBA Loan Consultation",
    "Houston Financial Advisors",
    "Doxo Promo LLC",
    "Virtual CFO",
    "Audit Defense Representation",
    "GAAP Accounting",
  ],
  authors: [{ name: "Doxo Promo LLC", url: "https://doxopromo.com" }],
  creator: "Doxo Promo LLC",
  publisher: "Doxo Promo LLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://doxopromo.com/",
  },
  openGraph: {
    title: "Doxo Promo LLC | Precision Accounting & Strategic Financial Growth",
    description:
      "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation for high-growth businesses.",
    url: "https://doxopromo.com/",
    siteName: "Doxo Promo LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doxo Promo LLC | Precision Accounting & Strategic Financial Growth",
    description:
      "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation for high-growth businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: SITE_CONFIG.name,
    alternateName: "Doxo Promo",
    url: "https://doxopromo.com/",
    logo: "https://doxopromo.com/logo.png",
    description:
      "Enterprise-grade Bookkeeping, Proactive Tax Strategy, Fractional CFO Advisory, and SBA Loan Consultation.",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1000 Main St, Suite 2300",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77002",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.7589",
      longitude: "-95.3677",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Doxo Promo LLC",
    url: "https://doxopromo.com/",
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
