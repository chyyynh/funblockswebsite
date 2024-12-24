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

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://funblocks.xyz"), // 替換為你的實際域名
    title: "Funblocks",
    description: "Your Page Description",
    openGraph: {
      title: "Funblocks",
      description: "Open Graph Description",
      url: "/your-page",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Open Graph Image Alt Text",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Twitter Title",
      description: "Twitter Description",
      images: ["/images/twitter-image.png"],
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
      </body>
    </html>
  );
}
