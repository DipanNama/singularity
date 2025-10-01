import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import React from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'Singularity - Production-Ready Next.js App',
    template: '%s | Singularity',
  },
  description: 'A modern, production-ready Next.js application with TypeScript, Tailwind CSS, and best practices.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Production-Ready'],
  authors: [{ name: 'Singularity Team' }],
  creator: 'Singularity',
  publisher: 'Singularity',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: './',
    title: 'Singularity - Production-Ready Next.js App',
    description: 'A modern, production-ready Next.js application with TypeScript, Tailwind CSS, and best practices.',
    siteName: 'Singularity',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Singularity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Singularity - Production-Ready Next.js App',
    description: 'A modern, production-ready Next.js application with TypeScript, Tailwind CSS, and best practices.',
    images: ['/og-image.png'],
    creator: '@singularity',
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body 
        className={`${inter.className} font-sans antialiased`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <div className="flex flex-col min-h-screen">
          <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Singularity
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  {/* Navigation items can be added here */}
                </div>
              </nav>
            </div>
          </header>

          <main 
            id="main-content" 
            className="flex-1 focus:outline-none" 
            tabIndex={-1}
          >
            {children}
          </main>

          <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © {new Date().getFullYear()} Singularity. Built with Next.js.
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500">
                  <span>Made with ❤️ for production</span>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Accessibility announcements */}
        <div 
          id="accessibility-announcements" 
          aria-live="polite" 
          aria-atomic="true" 
          className="sr-only"
        />
      </body>
    </html>
  );
}