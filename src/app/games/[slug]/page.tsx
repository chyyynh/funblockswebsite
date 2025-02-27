import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Header from "@/app/components/Header";
import { GameInfo } from "@/app/components/games/gameIntro/gameinfo";
import { GamePreview } from "@/app/components/games/gameIntro/gamePreview";
import { GameTabs } from "@/app/components/games/gameIntro/gameTabs"; // Import the client component
import { getGameByName } from "@/lib/supabase/getGame";

/*
function SimpleChart({ type }: { type: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="h-40 w-full bg-gray-200 rounded-md flex items-center justify-center">
        <BarChart2 className="text-gray-400 h-10 w-10" />
        <span className="text-gray-400 ml-2">Chart Placeholder</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        {type === "game" ? "Game Stats Trend" : "Degen Stats Trend"}
      </p>
    </div>
  );
}
*/

type Params = Promise<{ slug: string }>;

export default async function GamePage({ params }: { params: Params }) {
  const { slug } = await params;
  const game = await getGameByName(slug);

  {
    /*
  const degenStats = {
    degenPlayers: "8.7K",
    riskyPlays: "1.5M",
    highScores: "450K",
  };
  */
  }

  return (
    <div className="min-h-screen sm:bg-[#FAF9F6] sm:bg-[url('/images/background.svg')] bg-repeat">
      <Header />

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
                <h1 className="text-xl sm:text-3xl font-semibold">
                  {game.title}
                </h1>
              </div>
            </div>
            {/* Play Button */}
            <div className="hidden sm:block py-2">
              {game.playnow_link ? (
                // ✅ 有 playnow_link，顯示可點擊的「Play」按鈕
                <Link
                  href={game.playnow_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Button variant="outline" className="hover:bg-[#F3B43B]">
                    Play
                  </Button>
                </Link>
              ) : (
                // 沒有 playnow_link，顯示禁用的「In Development」按鈕
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

          {/* 主內容區域：手機上下，桌面左右 */}
          <div className="flex flex-col sm:flex-row gap-2">
            {/* 遊戲資訊：手機版在頂部，桌面版在右側 */}
            <div className="order-1 sm:order-2 sm:w-4/12">
              <GameInfo {...game} />
            </div>

            {/* 遊戲預覽：手機版在底部，桌面版在左側 */}
            <div className="order-2 sm:order-1 sm:w-8/12">
              <GamePreview {...game} />
            </div>
          </div>
        </div>

        <div className="bg-white border border-black px-4 py-4 mt-4">
          {/* Render the client component here */}
          <GameTabs
            gameIntroContent={<p>This is Game Introduction</p>}
            assetIntroContent={<p>This is Asset Introduction</p>}
          />
        </div>

        {/* Degen Stats */}
        {/*
        <div className="bg-zinc-400 px-4 py-4">
          <div className="bg-white w-full max-w-[100%]">
            <div className="flex flex-col sm:flex-row gap-2 p-2 max-w-[100%]">
              <div className="w-full sm:w-1/2 space-y-2">
                {degenStats.degenPlayers && (
                  <div className="bg-gray-50 rounded-lg p-2 shadow-sm">
                    <p className="text-sm text-gray-500">Degen Players</p>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {degenStats.degenPlayers}
                    </h2>
                  </div>
                )}
                {degenStats.riskyPlays && (
                  <div className="bg-gray-50 rounded-lg p-2 shadow-sm">
                    <p className="text-sm text-gray-500">Risky Plays</p>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {degenStats.riskyPlays}
                    </h2>
                  </div>
                )}
                {degenStats.highScores && (
                  <div className="bg-gray-50 rounded-lg p-2 shadow-sm">
                    <p className="text-sm text-gray-500">High Scores</p>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {degenStats.highScores}
                    </h2>
                  </div>
                )}
              </div>
              <div className="w-full sm:w-1/2">
                <SimpleChart type="degen" />
              </div>
              
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
