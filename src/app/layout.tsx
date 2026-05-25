import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#02040a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://xova.in"),
  title: {
    default: "XOVA Digital Solutions — Engineering Enterprise-Grade Digital Systems",
    template: "%s | XOVA Digital Solutions",
  },
  description:
    "XOVA engineers high-performance virtual architecture, AI workflow pipelines, and custom digital infrastructure for modern enterprises and MSMEs. Precision-built systems at operational scale.",
  keywords: [
    "digital infrastructure",
    "AI workflow automation",
    "custom web development",
    "enterprise software",
    "agentic pipelines",
    "MSME digital transformation",
    "Andhra Pradesh software company",
    "XOVA",
  ],
  authors: [{ name: "XOVA Digital Solutions", url: "https://xova.in" }],
  creator: "XOVA Digital Solutions",
  publisher: "XOVA Digital Solutions",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://xova.in",
    siteName: "XOVA Digital Solutions",
    title: "XOVA Digital Solutions — Engineering Enterprise-Grade Digital Systems",
    description:
      "High-performance virtual architecture, AI workflows, and custom digital infrastructure for modern enterprise.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "XOVA Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XOVA Digital Solutions — Engineering Enterprise-Grade Digital Systems",
    description:
      "High-performance virtual architecture, AI workflows, and custom digital infrastructure for modern enterprise.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://xova.in",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
