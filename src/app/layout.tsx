import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Armour Tint Studios | Premium Window Tinting & Ceramic Coating Dallas TX',
    template: '%s | Armour Tint Studios',
  },
  description:
    'Dallas\'s premier luxury window tinting, ceramic coating, and car detailing studio. Expert automotive, residential & commercial tinting. Protection meets perfection.',
  keywords: [
    'window tinting Dallas',
    'ceramic coating Dallas',
    'car detailing Dallas TX',
    'automotive window tinting Dallas',
    'residential window tinting Dallas',
    'commercial window tinting Dallas',
    'paint protection Dallas',
    'UV protection film Dallas',
    'Armour Tint Studios',
  ],
  authors: [{ name: 'Armour Tint Studios' }],
  creator: 'Armour Tint Studios',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://armourtintstudios.com',
    siteName: 'Armour Tint Studios',
    title: 'Armour Tint Studios | Premium Window Tinting & Ceramic Coating Dallas TX',
    description:
      'Dallas\'s premier luxury window tinting, ceramic coating, and car detailing studio. Protection meets perfection.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Armour Tint Studios Dallas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armour Tint Studios | Premium Window Tinting Dallas TX',
    description: 'Luxury window tinting, ceramic coatings & detailing in Dallas TX.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://armourtintstudios.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Armour Tint Studios',
              description:
                'Premium window tinting, ceramic coating, and car detailing in Dallas, TX.',
              url: 'https://armourtintstudios.com',
              telephone: '+19033579824',
              email: 'Armourtintstudio@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dallas',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 32.7767,
                longitude: -96.797,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '21:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday', 'Sunday'],
                  opens: '00:00',
                  closes: '00:00',
                  description: 'By Appointment',
                },
              ],
              sameAs: [
                'https://www.facebook.com/share/16wJ1BE3h8/',
                'https://www.instagram.com/armourtintstudios',
              ],
              priceRange: '$$',
              servesCuisine: null,
              serviceType: [
                'Window Tinting',
                'Ceramic Coating',
                'Car Detailing',
                'Residential Window Film',
                'Commercial Window Film',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
