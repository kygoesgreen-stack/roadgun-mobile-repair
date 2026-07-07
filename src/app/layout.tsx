import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://roadgunrepairs.com"),
  alternates: { canonical: "https://roadgunrepairs.com" },
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
              "@id": "https://roadgunrepairs.com/#business",
              name: "Roadgun Mobile Repair",
              url: "https://roadgunrepairs.com",
              image: "https://roadgunrepairs.com/images/hero-poster.jpg",
              logo: "https://roadgunrepairs.com/favicon-32.png",
              telephone: "+19103589027",
              priceRange: "$$",
              description:
                "Veteran-owned mobile mechanic serving Jacksonville, NC and surrounding areas. On-site diagnostics, brakes, batteries, trailer repair, and more.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jacksonville",
                addressRegion: "NC",
                postalCode: "28540",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.7541,
                longitude: -77.4302,
              },
              sameAs: [
                "https://www.facebook.com/p/Road-gun-Mobile-Repair-61580390874069/",
                "https://www.mapquest.com/us/north-carolina/road-gun-mobile-repair-790639151",
                "https://www.yelp.com/biz/road-gun-mobile-repair-jacksonville",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "06:00",
                  closes: "18:00",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "North Carolina" } },
                { "@type": "City", name: "Holly Ridge", containedInPlace: { "@type": "State", name: "North Carolina" } },
                { "@type": "AdministrativeArea", name: "Onslow County", containedInPlace: { "@type": "State", name: "North Carolina" } },
                { "@type": "AdministrativeArea", name: "Craven County", containedInPlace: { "@type": "State", name: "North Carolina" } },
                { "@type": "AdministrativeArea", name: "Jones County", containedInPlace: { "@type": "State", name: "North Carolina" } },
              ],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Vehicle Diagnostics" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Repair" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Replacement" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trailer Repair" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Auto Repair" } },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                worstRating: "1",
                reviewCount: "2",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Matthew Bennett" },
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody:
                    "Travis goes above and beyond fixing all my equipment and keeping it operational. Highly recommend and used his services on multiple different occasions.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Eric Coleman" },
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody:
                    "Travis has helped me literally bring my vehicle back to life over the past 6 to 12 months and the service has hands down been nothing but the best.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
