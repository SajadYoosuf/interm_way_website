import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import { SEO_SERVICES } from "./seo-data";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:3000";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const origin = `${protocol}://${host}`;
  const image = `${protocol}://${host}/og.png`;
  const title = "International Hospitality Internships | Internway Kerala";
  const description = "Explore international hospitality internships and career pathways for hotel management students with Internway in Calicut, Kerala. Start on WhatsApp.";

  return {
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
    ],
    alternates: { canonical: origin },
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
      url: origin,
      siteName: "Internway",
      images: [{ url: image, width: 1200, height: 630, alt: "Internway — Your career. Now global." }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:3000";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const origin = `${protocol}://${host}`;
  const organizationId = `${origin}/#organization`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": organizationId,
        name: "Internway",
        alternateName: "Internway International",
        url: origin,
        logo: `${origin}/internway-logo.jpg`,
        image: `${origin}/og.png`,
        description: "International hospitality internships and career pathway programs for hotel management students.",
        telephone: "+91-90373-64529",
        sameAs: ["https://www.instagram.com/internway_int/"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "HiLITE Business Park",
          addressLocality: "Calicut",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        areaServed: { "@type": "AdministrativeArea", name: "India" },
        knowsAbout: ["International hospitality internships", "Hotel operations", "Culinary careers", "Hospitality career pathways"],
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
        "@id": `${origin}/#website`,
        url: origin,
        name: "Internway",
        description: "International hospitality internships and career pathways for hotel management students.",
        inLanguage: "en-IN",
        publisher: { "@id": organizationId },
      },
    ],
  };

  return (
    <html lang="en-IN">
      <body className={geist.variable}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
