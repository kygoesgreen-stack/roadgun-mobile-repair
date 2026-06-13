import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roadgun Mobile Repair | Mobile Mechanic Fayetteville NC",
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Roadgun Mobile Repair brings professional auto repair to your door. Mobile mechanic serving Fayetteville, NC and surrounding areas. Diagnostics, brakes, batteries, and more. Call (910) 358-9027.",
  keywords: [
    "mobile mechanic Fayetteville NC",
    "mobile auto repair",
    "on-site car repair",
    "roadside mechanic",
    "mobile mechanic near me",
  ],
  openGraph: {
    title: "Roadgun Mobile Repair | Mobile Mechanic Fayetteville NC",
    description:
      "Professional auto repair that comes to you. Serving Fayetteville, NC and surrounding areas.",
    images: ["/images/hero-poster.jpg"],
    type: "website",
    locale: "en_US",
    siteName: "Roadgun Mobile Repair",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadgun Mobile Repair | Mobile Mechanic Fayetteville NC",
    description:
      "Professional auto repair that comes to you. Serving Fayetteville, NC and surrounding areas.",
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
                    "Saturday",
                  ],
                  opens: "06:00",
                  closes: "18:00",
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Fayetteville",
                  containedInPlace: {
                    "@type": "State",
                    name: "North Carolina",
                  },
                },
                {
                  "@type": "City",
                  name: "Fort Liberty",
                  containedInPlace: {
                    "@type": "State",
                    name: "North Carolina",
                  },
                },
                {
                  "@type": "City",
                  name: "Spring Lake",
                  containedInPlace: {
                    "@type": "State",
                    name: "North Carolina",
                  },
                },
                {
                  "@type": "City",
                  name: "Hope Mills",
                  containedInPlace: {
                    "@type": "State",
                    name: "North Carolina",
                  },
                },
                {
                  "@type": "City",
                  name: "Raeford",
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
