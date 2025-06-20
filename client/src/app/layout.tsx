import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "../../Provider";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WatchPool | Collaborative Video Watching Platform",
  description:
    "Create shared rooms to watch YouTube videos together. Vote on what plays next and enjoy content democratically with friends and communities in real-time.",
  keywords:
    "watch party, video sharing, collaborative playlist, youtube watch rooms, group video watching, content creator tools, democratic playlist",
  openGraph: {
    title: "WatchPool | Watch YouTube Videos Together",
    description:
      "Create rooms, share with your audience, and let viewers democratically choose which videos play next. Perfect for streamers and content creators.",
    url: "https://watchpool.com",
    siteName: "WatchPool",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WatchPool - Collaborative Video Watching Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WatchPool | Watch YouTube Videos Together",
    description:
      "Create rooms, add videos, vote, and watch together in real-time",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "WatchPool",
              description: "Collaborative video watching platform",
              applicationCategory: "Entertainment",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
