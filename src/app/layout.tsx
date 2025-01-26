import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";

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

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://funblocks.website"), // 替換為你的實際域名
    title: "Funblocks",
    description: "focus on the fully on chain game & autonomous world",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
