import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://swiinfinity.com'),
  title: {
    default: 'SWI Infinity | Premier Aesthetic & Plastic Surgery Clinic',
    template: '%s | SWI Infinity',
  },
  description:
    'Where surgical excellence meets aesthetic harmony. 75 advanced procedures across hair restoration, body contouring, facial surgery, and skin treatments.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'SWI Infinity | Premier Aesthetic & Plastic Surgery Clinic',
    description:
      'Where surgical excellence meets aesthetic harmony. 75 advanced procedures across hair restoration, body contouring, facial surgery, and skin treatments.',
    siteName: 'SWI Infinity',
    images: [
      {
        url: '/images/hero-1.jpg',
        width: 1200,
        height: 630,
        alt: 'SWI Infinity clinic hero image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SWI Infinity | Premier Aesthetic & Plastic Surgery Clinic',
    description:
      'Where surgical excellence meets aesthetic harmony. 75 advanced procedures across hair restoration, body contouring, facial surgery, and skin treatments.',
    images: ['/images/hero-1.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f4f6f3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
