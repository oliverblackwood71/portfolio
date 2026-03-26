import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { seoMetadata } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(seoMetadata.url),
  title: seoMetadata.title,
  description: seoMetadata.description,
  openGraph: {
    title: seoMetadata.title,
    description: seoMetadata.description,
    url: seoMetadata.url,
    siteName: seoMetadata.siteName,
    locale: seoMetadata.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(seoMetadata.ogImage),
        width: 1200,
        height: 630,
        alt: seoMetadata.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoMetadata.title,
    description: seoMetadata.description,
    images: [absoluteUrl(seoMetadata.ogImage)],
  },
  alternates: {
    canonical: seoMetadata.url,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body className="bg-stone-50 font-sans text-stone-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
