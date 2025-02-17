import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect } from "react";
import localFont from "next/font/local";
import TagManager from "react-gtm-module";
import Script from "next/script";
import "./globals.css";
import { Noto_Sans_TC, Noto_Sans_JP } from "next/font/google";

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
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-XXXXXXX" });
  }, []);

  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MF8WPB5P');
            `,
          }}
        />
      </head>
      <body
        className={`${notoSansTC.className} ${notoSansJP.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MF8WPB5P"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
