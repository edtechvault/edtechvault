import type { Metadata } from 'next';
import { CardNav } from '@/components/navigation/CardNav';
import './globals.css';
import { Outfit, Inter } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700']
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'EdTechVault - Websites for Teaching Businesses',
  description: 'Professional websites for tutors, coaches, and teaching businesses. Built in 3-7 days. No monthly fees. You own everything.',
  keywords: ['website design', 'tutor website', 'coaching website', 'teaching business', 'web development'],
  authors: [{ name: 'Leo Mahé' }],
  openGraph: {
    title: 'EdTechVault - Websites for Teaching Businesses',
    description: 'Professional websites for tutors, coaches, and teaching businesses. Built in 3-7 days. No monthly fees. You own everything.',
    url: 'https://edtechvault.com',
    siteName: 'EdTechVault',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdTechVault - Websites for Teaching Businesses',
    description: 'Professional websites for tutors, coaches, and teaching businesses. Built in 3-7 days. No monthly fees. You own everything.',
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
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-[var(--background)]">
        <CardNav theme="dark" />
        {children}
      </body>
    </html>
  );
}
