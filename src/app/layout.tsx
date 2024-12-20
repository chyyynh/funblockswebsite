import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Funblocks",
  description: "Gaming Media Focusing on Onchain Game",
  openGraph: {
    title: "網站標題 (OG)",
    description: "網站描述 (OG)",
    url: "https://你的網站網址.com",
    siteName: "網站名稱",
    images: [
      {
        url: "/path-to-image.jpg", // 放在 public 資料夾的圖片
        width: 1200,
        height: 630,
        alt: "圖片描述",
      },
    ],
    locale: "zh-TW",
    type: "website",
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
      </body>
    </html>
  );
}
