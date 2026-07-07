import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roadgun Mobile Repair | Mobile Mechanic Jacksonville NC",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: { url: "/favicon.ico", rel: "icon" },
  },
  description:
    "Roadgun Mobile Repair brings professional auto repair to your door. Veteran-owned mobile mechanic serving Jacksonville, NC and surrounding areas. Diagnostics, brakes, batteries, trailers, and more. Call (910) 358-9027.",
  keywords: [
    "mobile mechanic Jacksonville NC",
    "mobile auto repair",
    "on-site car repair",
    "roadside mechanic",
    "mobile mechanic near me",
    "trailer repair",
    "veteran owned mechanic",
  ],
  openGraph: {
    title: "Roadgun Mobile Repair | Mobile Mechanic Jacksonville NC",
    description:
      "Veteran-owned mobile mechanic serving Jacksonville, NC and surrounding areas. 26 years of experience.",
    images: ["/images/hero-poster.jpg"],
    type: "website",
    locale: "en_US",
    siteName: "Roadgun Mobile Repair",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadgun Mobile Repair | Mobile Mechanic Jacksonville NC",
    description:
      "Veteran-owned mobile mechanic serving Jacksonville, NC and surrounding areas. 26 years of experience.",
    images: ["/images/hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Roadgun Mobile Repair",
              telephone: "+19103589027",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "06:00",
                  closes: "18:00",
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Jacksonville",
                  containedInPlace: {
                    "@type": "State",
                    name: "North Carolina",
                  },
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Onslow County",
                  containedInPlace: {
                    "@type": "State",
                    name: "North Carolina",
                  },
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Craven County",
                  containedInPlace: {
                    "@type": "State",
                    name: "North Carolina",
                  },
                },
                {
                  "@type": "City",
                  name: "Holly Ridge",
                  containedInPlace: {
                    "@type": "State",
                    name: "North Carolina",
                  },
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Jones County",
                  containedInPlace: {
                    "@type": "State",
                    name: "North Carolina",
                  },
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5.0",
                worstRating: "5.0",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
