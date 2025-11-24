import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries/siteSettings";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    tags: ['siteSettings'],
  });

  // Fallback values if site settings are not configured
  const title = siteSettings?.siteTitle || "Sam Shulman | Software Engineer & AI Developer";
  const description = siteSettings?.siteDescription || "Building intelligent solutions that bridge technology and human potential. Explore my projects in AI, data engineering, and full-stack development.";
  const keywords = siteSettings?.siteKeywords || ["Software Engineer", "AI Developer", "Full Stack Developer", "Machine Learning", "Web Development", "Data Engineering"];

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Sam Shulman" }],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: '/api/og',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ['/api/og'],
    },
    ...(siteSettings?.favicon?.asset?.url && {
      icons: {
        icon: siteSettings.favicon.asset.url,
        apple: siteSettings.favicon.asset.url,
      },
    }),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    tags: ['siteSettings'],
  });

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {siteSettings?.googleAnalyticsId && (
          <GoogleAnalytics measurementId={siteSettings.googleAnalyticsId} />
        )}
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
