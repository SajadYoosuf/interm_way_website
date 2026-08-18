import type { Metadata } from "next";
import { LEADERSHIP, SEO_SERVICES } from "./seo-data";
import { SITE_URL } from "./site-config";
import "./globals.css";

const title = "International Hospitality Internships | Internway Kerala";
const description = "Explore hotel management internships in Vietnam, Hong Kong and Denmark with Internway. Enquire about housekeeping, front office, F&B service, culinary and production pathways.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Internway",
  authors: [{ name: "Internway" }],
  creator: "Internway",
  publisher: "Internway",
  category: "Hospitality career development",
  keywords: [
    "international hospitality internships",
    "hotel management internship abroad",
    "hospitality internships for students",
    "hospitality career pathway programs",
    "culinary internship pathway",
    "hotel management internship Kerala",
    "hospitality internships Calicut",
    "hotel management internship Vietnam",
    "hospitality internship Hong Kong",
    "hotel internship Denmark",
    "housekeeping internship abroad",
    "front office internship abroad",
    "food and beverage service internship",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/internway-logo.jpg", apple: "/internway-logo.jpg" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Internway",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Internway — Your career. Now global." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationId = `${SITE_URL}/#organization`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": organizationId,
        name: "Internway",
        alternateName: "Internway International",
        url: SITE_URL,
        logo: `${SITE_URL}/internway-logo.jpg`,
        image: `${SITE_URL}/og.png`,
        description: "International hospitality internships and career pathway programs for hotel management students.",
        telephone: "+91-90373-64529",
        email: "internwayint@gmail.com",
        sameAs: ["https://www.instagram.com/internway_int/"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "HiLITE Business Park",
          addressLocality: "Calicut",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "Vietnam" },
          { "@type": "Country", name: "Hong Kong" },
          { "@type": "Country", name: "Denmark" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-90373-64529",
          email: "internwayint@gmail.com",
          contactType: "student enquiries",
          availableLanguage: ["English", "Malayalam"],
        },
        knowsAbout: ["International hospitality internships", "Housekeeping", "Front office", "Food and beverage service", "Culinary", "Hotel production"],
        founder: LEADERSHIP.map((person) => ({
          "@type": "Person",
          name: person.name,
          jobTitle: person.schemaRole,
          worksFor: { "@id": organizationId },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hospitality Career Pathways",
          itemListElement: SEO_SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              provider: { "@id": organizationId },
              audience: { "@type": "EducationalAudience", educationalRole: "student" },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Internway",
        description: "International hospitality internships and career pathways for hotel management students.",
        inLanguage: "en-IN",
        publisher: { "@id": organizationId },
      },
    ],
  };

  return (
    <html lang="en-IN">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
