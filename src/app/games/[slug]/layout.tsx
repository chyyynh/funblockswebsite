"use clie";

import { ChakraProvider, defineConfig, createSystem } from "@chakra-ui/react";
import type { Metadata } from "next";
import { getGameByName } from "@/lib/supabase/getGame";
import ChakraProviderWrapper from "@/app/components/ChakraProviderWrapper";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(config);

export type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = await getGameByName(slug);

  if (!game) {
    console.error("Error fetching blog posts:", game.error);
  }

  return {
    metadataBase: new URL("https://www.funblocks.website"),
    title: `Funblocks | ${game.title}`,
    description: game.description || "Funblocks 专注于全链游戏的媒体",
    keywords: game.title || "",
    robots: "index, follow", // 設定可編製索引，根據需要調整
    openGraph: {
      title: `Funblocks | ${game.title}`,
      description: game.description || "Funblocks 专注于全链游戏的媒体",
      url: `/game/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@0xFunBlocksCN", // 你的 Twitter 帳號
      creator: "@0xFunBlocksCN", // 你的 Twitter 作者帳號
      title: `Funblocks | ${game.title}`,
      description: game.description,
    },
  };
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div suppressHydrationWarning>
      <ChakraProviderWrapper>{children}</ChakraProviderWrapper>
    </div>
  );
}
