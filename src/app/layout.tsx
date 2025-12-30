import type { Metadata } from 'next';
import { CardNav } from '@/components/navigation/CardNav';
import './globals.css';

export const metadata: Metadata = {
  title: 'EdTechVault - Websites for Teaching Businesses',
  description: 'Professional websites for tutors, coaches & teaching businesses. Built in days, not months. No tech headaches. No monthly fees.',
  keywords: ['website design', 'tutor website', 'coaching website', 'teaching business', 'web development'],
  authors: [{ name: 'Leo Mahé' }],
  openGraph: {
    title: 'EdTechVault - Websites for Teaching Businesses',
    description: 'Professional websites for tutors, coaches & teaching businesses. Built in days, not months.',
    url: 'https://edtechvault.com',
    siteName: 'EdTechVault',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdTechVault - Websites for Teaching Businesses',
    description: 'Professional websites for tutors, coaches & teaching businesses. Built in days, not months.',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[var(--background)]">
        {children}
      </body>
    </html>
  );
}
