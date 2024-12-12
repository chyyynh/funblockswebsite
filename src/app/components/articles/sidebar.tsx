import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "./article-card";

export function Sidebar() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-lg font-semibold">推薦遊戲</h2>
        <Link
          href="#"
          className="group block overflow-hidden rounded-none border p-4"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-20 aspect-square">
              <Image
                src="/images/games/dopewars.jpg"
                alt="Game cover"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium group-hover:text-primary">
                Dope War - Roll Your Own
              </h3>
            </div>
          </div>
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">推薦文章</h2>
        <div className="space-y-4">
          <ArticleCard
            isCompact
            title="[新聞] EVE Online 星戰前夜開發商宣布 Prject Awakening 更名 EVE Frontier 和第四階段測試"
            author="CCP Games"
            date="February 24, 2024"
          />
          <ArticleCard
            isCompact
            title="[Funblock 翻譯文章] 自主世界中的“自然可组合性”"
            author="Funblocks"
            date="February 24, 2024"
          />
          <ArticleCard
            isCompact
            title="[開發] Redstone 宣布主網將在 5/1 正式上線並舉辦 Race to Mainnet"
            author="Lattice"
            date="February 24, 2024"
          />
        </div>
      </section>
    </div>
  );
}
