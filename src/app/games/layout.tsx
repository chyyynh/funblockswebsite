import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FunBlocks | 全鏈遊戲列表",
  description:
    "FunBlocks 全鏈遊戲列表，包含遊戲類型、引擎、區塊鏈、遊戲工作室。",
  metadataBase: new URL("https://funblocks.website"), // 替換為你的實際域名
  openGraph: {
    title: "FunBlocks | 遊戲列表",
    description:
      "FunBlocks 全鏈遊戲列表，包含遊戲類型、引擎、區塊鏈、遊戲工作室。",
    url: "https://funblocks.website/games",
    images: [
      {
        url: "/images/games_screenshot.png",
        width: 1200,
        height: 630,
        alt: "Open Graph Image Alt Text",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FunBlocks | 全鏈遊戲列表",
    description:
      "FunBlocks 全鏈遊戲列表，包含遊戲類型、引擎、區塊鏈、遊戲工作室。",
    images: ["/images/games_screenshot.png"],
  },
};

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
      </body>
    </html>
  );
}
