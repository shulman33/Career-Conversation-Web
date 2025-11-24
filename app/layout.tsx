import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Shulman | Software Engineer & AI Developer",
  description: "Building intelligent solutions that bridge technology and human potential. Explore my projects in AI, data engineering, and full-stack development.",
  keywords: ["Software Engineer", "AI Developer", "Full Stack Developer", "Machine Learning", "Web Development", "Data Engineering"],
  authors: [{ name: "Sam Shulman" }],
  openGraph: {
    title: "Sam Shulman | Software Engineer & AI Developer",
    description: "Building intelligent solutions that bridge technology and human potential.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Shulman | Software Engineer & AI Developer",
    description: "Building intelligent solutions that bridge technology and human potential.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
