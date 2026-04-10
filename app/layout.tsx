import type { Metadata } from 'next';
import { inter, playfair } from '@/lib/fonts';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://straton.com'),
  title: {
    default: 'Straton | Programme Delivery & Transformation Consulting',
    template: '%s | Straton',
  },
  description: 'Straton is a delivery-focused partnership helping organisations deliver complex ERP and transformation programmes with clarity, structure, and control.',
  keywords: [
    'programme delivery',
    'ERP implementation',
    'transformation consulting',
    'go-live readiness',
    'programme governance',
  ],
  authors: [{ name: 'Straton' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://straton.com',
    siteName: 'Straton',
    title: 'Straton | Programme Delivery & Transformation Consulting',
    description: 'Clarity where others see complexity. We help organisations deliver complex programmes with structure, control, and confidence.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Straton',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Straton | Programme Delivery',
    description: 'Delivery-focused partnership for ERP and transformation programmes.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://straton.com',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Straton',
  url: 'https://straton.com',
  email: 'hello@straton.com',
  description: 'Delivery-focused partnership for ERP and transformation programmes',
  founder: [
    {
      '@type': 'Person',
      name: 'Olusegun Olamide',
    },
    {
      '@type': 'Person',
      name: 'Hiram Kanwal',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;700;900&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
