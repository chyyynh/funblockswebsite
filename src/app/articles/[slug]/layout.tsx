import type { Metadata } from "next";
import { ReactNode } from "react";
import { Noto_Sans_TC, Noto_Sans_JP } from "next/font/google"; // Combine imports

import { getStaticProps } from "@/lib/supabase/getStaticProps";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-tc",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const { props } = await getStaticProps(slug);
  const article = props.article;

  if (!article) {
    console.error("Error fetching blog posts:", props.error);
  }

  return {
    metadataBase: new URL("https://www.funblocks.website"),
    title: `Funblocks | ${article.metadata.title}`,
    description: article.metadata.summary || "Funblocks 专注于全链游戏的媒体",
    keywords: article.metadata.keyword || "", // 設置焦點關鍵字
    robots: "index, follow", // 設定可編製索引，根據需要調整
    openGraph: {
      title: `Funblocks | ${article.metadata.title}`,
      description: article.metadata.summary || "Funblocks 专注于全链游戏的媒体",
      url: `/articles/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@0xFunBlocksCN", // 你的 Twitter 帳號
      creator: "@0xFunBlocksCN", // 你的 Twitter 作者帳號
      title: `Funblocks | ${article.metadata.title}`,
      description: article.metadata.summary,
      images: [article.metadata.image],
    },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${notoSansJP.variable} ${notoSansTC.variable}`}>
      <main>{children}</main>
    </div>
  );
}
