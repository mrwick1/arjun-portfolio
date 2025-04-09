import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  preload: true,
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  preload: true,
});

// Separate viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FFFCF8',
};

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  keywords: ['Frontend Engineer', 'React.js', 'TypeScript', 'Web Development', 'Portfolio', 'Software Engineer'],
  authors: [{ name: aboutMe.name }],
  creator: aboutMe.name,
  publisher: aboutMe.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.arjunp.pro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: customMetadata.title || aboutMe.name,
    description: customMetadata.description || aboutMe.description,
    url: 'https://www.arjunp.pro',
    siteName: aboutMe.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/images/laptop.webp',
        width: 1200,
        height: 630,
        alt: 'Arjun - Senior Frontend Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: customMetadata.title || aboutMe.name,
    description: customMetadata.description || aboutMe.description,
    creator: '@03arjunkr',
    images: ['/assets/images/laptop.webp'],
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
  icons: {
    icon: [
      { url: 'favicon.ico', sizes: 'any' },
      { url: 'favicon.svg', type: 'image/svg+xml' }
    ],
    apple: 'favicon.svg',
  },
  manifest: 'manifest.json',
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        <SpeedInsights />
        <Analytics />
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8]">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between ">
            <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
