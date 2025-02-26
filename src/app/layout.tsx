import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zachary Prong | Growth & Web Engineer",
    template: "%s | Zachary Prong"
  },
  description: "Growth and Web Engineer specializing in product development, technical leadership, and scalable solutions.",
  keywords: ["Growth Engineer", "Web Engineer", "Tech Lead", "Full Stack Developer", "JavaScript", "TypeScript", "React", "Next.js"],
  authors: [{ name: "Zachary Prong" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zprong.com",
    title: "Zachary Prong | Growth & Web Engineer",
    description: "Growth and Web Engineer specializing in product development, technical leadership, and scalable solutions.",
    siteName: "Zachary Prong",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Prong | Growth & Web Engineer",
    description: "Growth and Web Engineer specializing in product development, technical leadership, and scalable solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://zprong.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zachary Prong",
              jobTitle: "Growth Engineer",
              url: "https://zprong.com",
              sameAs: [
                "https://www.linkedin.com/in/zachary-prong/",
                "https://github.com/zprong"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
