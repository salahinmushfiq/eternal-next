// src/app/layout.tsx

import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientLayout from './client-layout';

export const metadata = {
  title: 'Eternal | Timeless Lifestyle & Fashion',
  description: 'Discover curated fashion essentials with elegance and comfort. Shop now from Eternal Lifestyle.',
  keywords: ['Eternal', 'Fashion', 'Lifestyle', 'Clothing', 'Shop'],
  authors: [{ name: 'Eternal Lifestyle' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Eternal | Fashion with Purpose',
    description: 'Step into sustainable fashion crafted with care. Discover your timeless style.',
    url: 'https://eternalnext.netlify.app',
    siteName: 'Eternal Lifestyle',
    images: [
      {
        url: 'https://eternalnext.netlify.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eternal Lifestyle OG',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eternal | Timeless Fashion',
    description: 'Discover curated fashion essentials with elegance and comfort.',
    images: ['https://eternalnext.netlify.app/og-image.jpg'],
    creator: '@EternalBrand',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <Navbar />
          <main className="pt-[72px] min-h-screen">{children}</main>
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
