
import type { Metadata } from "next";
import { Philosopher, Roboto } from "next/font/google";
import "./globals.css";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEA Čajevi | Prirodni Čajevi iz Bosne - Kamilica, Menta, Šipak",
  description: "Otkrijte autentične prirodne čajeve iz Bosne. Nudimo šipak, kamilicu i mentu - čajeve koji donose zdravlje, mir i toplinu. Porodični biznis s tradicijom i ljubavlju prema kvaliteti.",
  keywords: [
    "čaj",
    "prirodni čaj",
    "bosanski čaj",
    "šipak čaj",
    "kamilica čaj",
    "menta čaj",
    "organski čaj",
    "zdravi čaj",
    "biljna medicina",
    "tradicionalni čaj",
    "NEA čajevi",
    "čajevi Travnik",
    "porodični biznis",
    "ekološki proizvodi"
  ],
  authors: [{ name: "NEA Čajevi" }],
  creator: "NEA Čajevi",
  publisher: "NEA Čajevi",
  metadataBase: new URL("https://neas.ba"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "bs_BA",
    url: "https://neas.ba",
    title: "NEA Čajevi | Prirodni Čajevi iz Bosne",
    description: "Svježi prirodni čajevi iz Bosne - Šipak, Kamilica, Menta. Porodični biznis s ljubavlju prema kvaliteti i tradiciji.",
    siteName: "NEA Čajevi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEA Čajevi - Prirodni Čajevi iz Bosne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEA Čajevi | Prirodni Čajevi iz Bosne",
    description: "Otkrijte autentične prirodne čajeve iz Bosne - Šipak, Kamilica, Menta",
    images: ["/og-image.jpg"],
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
  category: "Food & Beverage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${philosopher.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7D806A" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "NEA Čajevi",
              "image": "https://neas.ba/logo.png",
              "@id": "https://neas.ba",
              "url": "https://neas.ba",
              "telephone": "+387-61-652-428",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mujnice bb",
                "addressLocality": "Travnik",
                "postalCode": "72270",
                "addressCountry": "BA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.2286,
                "longitude": 17.6645
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "19:00",
                  "closes": "23:00"
                }
              ],
              "priceRange": "$$",
              "description": "Prirodni čajevi iz Bosne - Šipak, Kamilica, Menta",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NEA Čajevi",
              "url": "https://neas.ba",
              "logo": "https://neas.ba/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+387-61-652-428",
                "contactType": "Customer Service",
                "email": "info@neas.ba",
                "availableLanguage": ["Bosnian", "Serbian", "Croatian"]
              },
              "sameAs": [
                "https://www.facebook.com/neacajevi",
                "https://www.instagram.com/neacajevi"
              ]
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Product",
                  "position": 1,
                  "name": "Šipak Čaj",
                  "description": "Prirodni šipak čaj bogat vitaminom C i antioksidansima",
                  "image": "https://neas.ba/products/sipak.jpg",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "price": "5.00",
                    "priceCurrency": "BAM"
                  }
                },
                {
                  "@type": "Product",
                  "position": 2,
                  "name": "Kamilica Čaj",
                  "description": "Umirujući čaj od kamilice za bolji san i opuštanje",
                  "image": "https://neas.ba/products/kamilica.jpg",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "price": "5.00",
                    "priceCurrency": "BAM"
                  }
                },
                {
                  "@type": "Product",
                  "position": 3,
                  "name": "Menta Čaj",
                  "description": "Osvježavajući čaj od mente za lakšu probavu",
                  "image": "https://neas.ba/products/menta.jpg",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "price": "5.00",
                    "priceCurrency": "BAM"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
