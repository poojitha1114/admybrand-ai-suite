import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description: "Create stunning marketing campaigns, generate compelling content, and optimize your brand presence with the power of artificial intelligence. Start your free trial today.",
  keywords: [
    "AI marketing",
    "content generation",
    "marketing automation",
    "brand optimization",
    "social media management",
    "marketing analytics",
    "AI-powered marketing",
    "campaign management"
  ],
  authors: [{ name: "ADmyBRAND AI Suite" }],
  creator: "ADmyBRAND AI Suite",
  publisher: "ADmyBRAND AI Suite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://admybrand-ai-suite.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Create stunning marketing campaigns, generate compelling content, and optimize your brand presence with the power of artificial intelligence.",
    url: 'https://admybrand-ai-suite.vercel.app',
    siteName: 'ADmyBRAND AI Suite',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Create stunning marketing campaigns, generate compelling content, and optimize your brand presence with the power of artificial intelligence.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
