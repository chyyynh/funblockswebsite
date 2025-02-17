import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import Script from "next/script";
import { Noto_Sans_TC, Noto_Sans_JP } from "next/font/google";

import { GoogleAnalytics } from "./components/GoogleAnalytics";

const notoSansTC = Noto_Sans_TC({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

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
  metadataBase: new URL("https://funblocks.website"), // 替換為你的實際域名
  title: "Funblocks",
  description: "focus on the fully on chain game & autonomous world",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Funblocks",
    description: "focus on the fully on chain game & autonomous world",
    url: "https://funblocks.website",
    images: [
      {
        url: "/images/funblocksvisual.jpg",
        width: 1200,
        height: 630,
        alt: "Funblocks Visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funblocks",
    description: "focus on the fully on chain game & autonomous world",
    images: ["/images/funblocksvisual.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-9CCVHKK8W2`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9CCVHKK8W2', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${notoSansTC.className} ${notoSansJP.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics GA_TRACKING_ID="G-9CCVHKK8W2" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
