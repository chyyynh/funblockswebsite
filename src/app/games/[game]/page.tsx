import Image from "next/image";
import { PlayCircle } from "lucide-react";

import Header from "@/app/components/Header";

export default function GameStore() {
  return (
    <div className="min-h-screen sm:bg-[#FAF9F6] sm:bg-[url('/images/background.svg')] bg-repeat">
      <Header />

      <div className="container mx-auto px-4 sm:px-36 py-8">
        {/* 頭像與標題 */}
        <div className="flex items-center space-x-3 mb-4">
          {/* 頭像 */}
          <div className="w-14 h-14 relative rounded-full overflow-hidden">
            <Image
              src="/images/proofofplay.png"
              alt="Pirate Nation Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* 文本內容 */}
          <div>
            <h1 className="text-xl sm:text-3xl font-semibold">Pirate Nation</h1>
            <p className="text-gray-500 text-sm">海盜主題的區塊鏈遊戲</p>
          </div>
        </div>

        {/* 遊戲資訊（右側） */}
        <aside className="w-full sm:hidden">
          <div className="bg-white rounded-lg">
            {/* 遊戲橫幅 */}
            <div className="relative aspect-video overflow-hidden rounded-md">
              <Image
                src="/images/piratenation_sc.png"
                alt="Game Banner"
                fill
                className="object-cover"
              />
            </div>

            {/* 遊戲描述 */}
            <p className="text-black text-sm mt-4 mb-4">
              A fully onchain RPG, filled with high seas adventure, treasure, &
              unexpected surprises
            </p>

            {/* 發行資訊 */}
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">發行日期：</span>
                <span className="text-slate-400">2025 年 1 月 17 日</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">發行商：</span>
                <span className="text-blue-400">
                  KOEI TECMO GAMES CO., LTD.
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* 主要內容區域：手機上下排，桌面左右排 */}
        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          {/* 遊戲預覽（左側） */}
          <div className="w-full sm:w-8/12">
            <div className="bg-white rounded-lg">
              {/* 主圖片 */}
              <div className="relative aspect-video overflow-hidden rounded-md mb-2">
                <Image
                  src="/images/piratenation_sc.png"
                  alt="Game Scene"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 略縮圖畫廊 */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="relative shrink-0">
                    <div className="relative h-24 w-40 overflow-hidden rounded-md">
                      <Image
                        src="/images/piratenation_sc.jpg"
                        alt={`Gallery image ${item}`}
                        width={160}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    {item <= 2 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <PlayCircle className="h-8 w-8 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 遊戲資訊（右側） */}
          <aside className="hidden sm:block w-full sm:w-4/12">
            <div className="bg-white rounded-lg">
              {/* 遊戲橫幅 */}
              <div className="relative aspect-video overflow-hidden rounded-md">
                <Image
                  src="/images/piratenation_sc.png"
                  alt="Game Banner"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 遊戲描述 */}
              <p className="text-black text-sm mt-4 mb-4">
                一款完全上鏈的 RPG 遊戲，充滿了海洋冒險、寶藏和意想不到的驚喜
              </p>

              {/* 發行資訊 */}
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">發行日期：</span>
                  <span className="text-slate-400">2025 年 1 月 17 日</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">發行商：</span>
                  <span className="text-blue-400">
                    KOEI TECMO GAMES CO., LTD.
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
