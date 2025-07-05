import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Alenley Management | Miami & Broward County Florida",
    template: "%s | Alenley Management",
  },
  description:
    "Professional property management services in Miami-Dade and Broward Counties. $150 flat-fee pricing, 360° virtual tours, AI-powered rent optimization, and 24/7 support. Licensed Florida property managers.",
  keywords: [
    "Miami property management",
    "Broward property management",
    "Florida property management",
    "Miami rental management",
    "Fort Lauderdale property management",
    "Coral Gables property management",
    "Aventura property management",
    "Miami Beach property management",
    "property management company Florida",
    "rental property management Miami",
    "investment property management",
    "flat fee property management",
    "Miami landlord services",
    "Broward rental management",
    "South Florida property managers",
    "Miami property managers",
    "property management near me",
    "best property management Miami",
    "affordable property management",
    "professional property management",
    "Miami-Dade property management",
    "Broward County property management",
    "Hollywood FL property management",
    "Pembroke Pines property management",
    "Davie property management",
    "Plantation property management",
    "Sunrise property management",
    "Weston property management",
    "Cooper City property management",
    "Miramar property management",
    "Doral property management",
    "Kendall property management",
    "Homestead property management",
  ],
  authors: [{ name: "Alenley Management" }],
  creator: "Alenley Management",
  publisher: "Alenley Management",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alenley.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alenley.com",
    title: "Alenley Management | Miami & Broward County Florida",
    description:
      "Professional property management services in Miami-Dade and Broward Counties. $150 flat-fee pricing, 360° virtual tours, and expert local knowledge. Licensed Florida property managers.",
    siteName: "Alenley Management",
    images: [
      {
        url: "/images/miami-skyline-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Alenley Management - Miami Skyline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alenley Management | Miami & Broward County Florida",
    description:
      "Professional property management services in Miami-Dade and Broward Counties. $150 flat-fee pricing and expert local knowledge. Licensed Florida property managers.",
    images: ["/images/miami-skyline-hero.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://alenley.com" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Miami, Florida" />
        <meta name="geo.position" content="25.7617;-80.1918" />
        <meta name="ICBM" content="25.7617, -80.1918" />
        {/* Enhanced Local Business Schema with Multiple Locations */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://alenley.com",
              name: "Alenley Management",
              alternateName: ["Alenley PM", "Alenley Management Miami", "Alenley Management Broward"],
              image: [
                "https://alenley.com/images/miami-skyline-hero.jpg",
                "https://alenley.com/images/modern-apartment-building.jpg",
                "https://alenley.com/images/miami-office-building.jpg",
              ],
              description:
                "Professional property management services in Miami-Dade and Broward Counties with flat-fee pricing and advanced technology. Licensed Florida property managers serving Miami, Fort Lauderdale, Coral Gables, Aventura, Hollywood, and surrounding areas.",
              url: "https://alenley.com",
              telephone: "+1-305-699-3437",
              email: "info@alenley.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "14261 SW 120th St, Ste 108-694",
                addressLocality: "Miami",
                addressRegion: "FL",
                addressCountry: "US",
                postalCode: "33186",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.6711,
                longitude: -80.4081,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Miami",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Miami-Dade County",
                  },
                },
                {
                  "@type": "City",
                  name: "Miami Beach",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Miami-Dade County",
                  },
                },
                {
                  "@type": "City",
                  name: "Fort Lauderdale",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Broward County",
                  },
                },
                {
                  "@type": "City",
                  name: "Coral Gables",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Miami-Dade County",
                  },
                },
                {
                  "@type": "City",
                  name: "Aventura",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Miami-Dade County",
                  },
                },
                {
                  "@type": "City",
                  name: "Hollywood",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Broward County",
                  },
                },
                {
                  "@type": "City",
                  name: "Doral",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Miami-Dade County",
                  },
                },
                {
                  "@type": "City",
                  name: "Pembroke Pines",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Broward County",
                  },
                },
                {
                  "@type": "City",
                  name: "Plantation",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Broward County",
                  },
                },
                {
                  "@type": "City",
                  name: "Davie",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Broward County",
                  },
                },
                {
                  "@type": "City",
                  name: "Sunrise",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Broward County",
                  },
                },
                {
                  "@type": "City",
                  name: "Weston",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Broward County",
                  },
                },
                {
                  "@type": "City",
                  name: "Cooper City",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Broward County",
                  },
                },
                {
                  "@type": "City",
                  name: "Miramar",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Broward County",
                  },
                },
                {
                  "@type": "City",
                  name: "Kendall",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Miami-Dade County",
                  },
                },
                {
                  "@type": "City",
                  name: "Homestead",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                    "@type": "AdministrativeArea",
                    name: "Miami-Dade County",
                  },
                },
              ],
              serviceType: [
                "Property Management",
                "Rental Management",
                "Tenant Screening",
                "Maintenance Coordination",
                "Investment Consulting",
                "Landlord Services",
                "Property Investment Management",
                "Rental Property Management",
              ],
              priceRange: "$150",
              openingHours: ["Mo-Fr 08:00-18:00"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Property Management Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full Property Management Miami-Dade",
                      description:
                        "Complete property management including tenant screening, rent collection, and maintenance for Miami-Dade County properties",
                      areaServed: "Miami-Dade County, Florida",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full Property Management Broward County",
                      description:
                        "Complete property management including tenant screening, rent collection, and maintenance for Broward County properties",
                      areaServed: "Broward County, Florida",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tenant Relations Miami",
                      description: "Professional tenant management with 24/7 support for Miami area properties",
                      areaServed: "Miami, Florida",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Investment Optimization South Florida",
                      description:
                        "AI-powered market analysis and strategic pricing for South Florida rental properties",
                      areaServed: "South Florida",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Maria Rodriguez",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Alenley has been managing my condo for 3 years. They consistently find quality tenants and handle everything professionally. My property stays occupied and profitable.",
                  datePublished: "2024-11-15",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "James Thompson",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Switched to Alenley after poor experience with another company. Night and day difference! They actually care about your investment and communicate regularly.",
                  datePublished: "2024-10-22",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Carlos Mendez",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "As a first-time investor, Alenley guided me through everything. Their market knowledge in Miami-Dade is exceptional. Highly recommend!",
                  datePublished: "2024-09-18",
                },
              ],
              sameAs: [
                "https://www.facebook.com/alenleypm",
                "https://www.linkedin.com/company/alenley",
                "https://www.yelp.com/biz/alenley-property-management-miami",
                "https://www.google.com/maps/place/alenley-property-management",
              ],
            }),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Alenley Management",
              url: "https://alenley.com",
              logo: "https://alenley.com/placeholder-logo.png",
              foundingDate: "2014",
              founders: [
                {
                  "@type": "Person",
                  name: "Alenley Management Team",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-305-699-3437",
                  contactType: "customer service",
                  areaServed: ["US-FL", "Miami-Dade County", "Broward County"],
                  availableLanguage: ["English", "Spanish"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "08:00",
                    closes: "18:00",
                  },
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+1-305-699-3437",
                  contactType: "emergency",
                  areaServed: ["US-FL", "Miami-Dade County", "Broward County"],
                  availableLanguage: ["English", "Spanish"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    opens: "00:00",
                    closes: "23:59",
                  },
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "14261 SW 120th St, Ste 108-694",
                addressLocality: "Miami",
                addressRegion: "FL",
                addressCountry: "US",
                postalCode: "33186",
              },
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Miami-Dade County",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                  },
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Broward County",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                  },
                },
              ],
            }),
          }}
        />
        {/* Service Schema for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Property Management Services Miami-Dade and Broward County",
              provider: {
                "@type": "LocalBusiness",
                name: "Alenley Management",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "14261 SW 120th St, Ste 108-694",
                  addressLocality: "Miami",
                  addressRegion: "FL",
                  addressCountry: "US",
                  postalCode: "33186",
                },
              },
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Miami-Dade County",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                  },
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Broward County",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                  },
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Property Management Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Residential Property Management Miami",
                      description:
                        "Full-service management for single-family homes, condos, and apartments in Miami-Dade County",
                      areaServed: "Miami-Dade County, Florida",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "150",
                      priceCurrency: "USD",
                      billingIncrement: "monthly",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Residential Property Management Broward",
                      description:
                        "Full-service management for single-family homes, condos, and apartments in Broward County",
                      areaServed: "Broward County, Florida",
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "150",
                      priceCurrency: "USD",
                      billingIncrement: "monthly",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {/* Enhanced FAQ Schema with Local Questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does property management cost in Miami?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Alenley Management charges a flat fee of $150 per month for property management in Miami-Dade County, unlike traditional companies that charge 8-12% of monthly rent.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas do you serve in South Florida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide property management services throughout Miami-Dade and Broward Counties, including Miami, Miami Beach, Fort Lauderdale, Coral Gables, Aventura, Hollywood, Doral, Pembroke Pines, Plantation, Davie, Sunrise, Weston, Cooper City, Miramar, Kendall, and Homestead.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer 24/7 emergency maintenance in Miami-Dade and Broward?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide 24/7 emergency maintenance coordination for urgent issues like flooding, electrical problems, and security concerns throughout Miami-Dade and Broward Counties.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes Alenley different from other Miami property management companies?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Alenley offers flat-fee pricing ($150/month vs 8-12% of rent), AI-powered rent optimization, 360° virtual tours, and deep local market knowledge in Miami-Dade and Broward Counties. We're licensed, insured, and provide 24/7 emergency support.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do you screen tenants in Miami and Broward County?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We conduct comprehensive tenant screening including credit checks, employment verification, rental history, and background checks. Our process complies with all Florida fair housing laws and local Miami-Dade and Broward County regulations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the average rental income for properties in Miami-Dade County?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Rental income varies by location and property type. Miami Beach averages $4,500/month, Coral Gables $3,200/month, Aventura $2,800/month, and Fort Lauderdale $2,400/month. We provide free rental analysis to determine your property's potential.",
                  },
                },
              ],
            }),
          }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://alenley.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Property Management Services",
                  item: "https://alenley.com/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Miami-Dade County",
                  item: "https://alenley.com/neighborhoods",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Broward County",
                  item: "https://alenley.com/neighborhoods",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
