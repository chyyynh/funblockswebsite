import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Header from "@/app/components/Header";
import { GameInfo } from "@/app/components/games/gameIntro/gameinfo";
import { GamePreview } from "@/app/components/games/gameIntro/gamePreview";
import { GameTabs } from "@/app/components/games/gameIntro/gameTabs"; // Import the client component
import { GameRelated } from "@/app/components/games/gameIntro/gameRelated";
import { getGameBySlug, getAllGameSlugs } from "@/lib/supabase/getGame";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getAllGameSlugs(); // 假設這個函數會回傳所有遊戲名稱
  return slugs;
}

export const revalidate = 60; // 60秒後重新生成靜態頁面

export default async function GamePage({ params }: { params: Params }) {
  const { slug } = await params;
  const game = await getGameBySlug(slug);

  return (
    <div className="min-h-screen sm:bg-[#FAF9F6] sm:bg-[url('/images/background.svg')] bg-repeat">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="container mx-auto px-4 sm:px-32 py-4">
        <div className="bg-white border border-black px-4 py-4 justify-between">
          <div className="flex flex-row justify-between">
            {/* 頭像與標題 */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 relative rounded-full overflow-hidden">
                <Image
                  src={game.twitter_img.pfp}
                  alt="Pirate Nation Logo"
                  fill
                  style={{ objectFit: "cover" }} // 使用 style 屬性來替代 objectFit
                />
              </div>
              <div>
                <h1 className="text-xl text-black sm:text-3xl font-semibold">
                  {game.title}
                </h1>
              </div>
            </div>
            {/* Play Button */}
            <div className="hidden sm:block py-2">
              {game.playnow_link ? (
                <Link
                  href={game.playnow_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Button
                    variant="outline"
                    className="bg-transparent text-black font-semibold hover:bg-[#F3B43B]"
                  >
                    PLAY
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  disabled
                  className="opacity-50 cursor-not-allowed"
                >
                  {game.status}
                </Button>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {/* 遊戲資訊 order：手機版在頂部，桌面版在右側 */}
            <div className="order-1 sm:order-2 sm:w-4/12">
              <GameInfo {...game} />
            </div>
            <div className="order-2 sm:order-1 sm:w-8/12">
              <GamePreview {...game} />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Render the client component here */}
          <div className="sm:w-8/12 bg-white border border-black p-4">
            <GameTabs />
          </div>
          <div className="flex flex-col bg-white border border-black p-4 sm:block sm:w-4/12">
            <GameRelated {...game} />
          </div>
        </div>
      </div>
    </div>
  );
}
