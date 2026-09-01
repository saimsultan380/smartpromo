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
    default: "Doxo Promo | Precision Accounting & Strategic Financial Growth",
    template: "%s | Doxo Promo",
  },
  description:
    "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation for high-growth businesses and corporations.",
  keywords: [
    "CFO Advisory",
    "Corporate Tax Planning",
    "Enterprise Bookkeeping",
    "Loan Consultation",
    "St Petersburg FL Financial Advisors",
    "Doxo Promo",
    "Virtual CFO",
    "Audit Defense Representation",
    "GAAP Accounting",
  ],
  authors: [{ name: "Doxo Promo", url: "https://doxopromo.com" }],
  creator: "Doxo Promo",
  publisher: "Doxo Promo",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://doxopromo.com/",
  },
  icons: {
    icon: [
      { url: SITE_CONFIG.logoPath, type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    shortcut: SITE_CONFIG.logoPath,
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Doxo Promo | Precision Accounting & Strategic Financial Growth",
    description:
      "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation for high-growth businesses.",
    url: "https://doxopromo.com/",
    siteName: "Doxo Promo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Doxo Promo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doxo Promo | Precision Accounting & Strategic Financial Growth",
    description:
      "Enterprise-level Bookkeeping, Strategic Tax Architecture, Fractional CFO Advisory, and SBA Loan Consultation for high-growth businesses.",
    images: ["/opengraph-image"],
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
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logoUrl,
      width: 512,
      height: 512,
    },
    description:
      "Enterprise-grade Bookkeeping, Proactive Tax Strategy, Fractional CFO Advisory, and Loan Consultation.",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "7901 4th St N STE 300",
      addressLocality: "St Petersburg",
      addressRegion: "FL",
      postalCode: "33702",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.844426",
      longitude: "-82.638192",
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
    name: "Doxo Promo",
    url: "https://doxopromo.com/",
    publisher: {
      "@type": "Organization",
      name: "Doxo Promo",
      logo: {
        "@type": "ImageObject",
        url: SITE_CONFIG.logoUrl,
      },
    },
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
