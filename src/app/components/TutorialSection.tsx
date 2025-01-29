import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "社交戰爭遊戲 Duper 簡介",
    author: "Funblock",
    translateBy: "chiny",
    publishedAt: "2024-10-17",
    image: "/images/tutorials/duper.webp",
    summary: "介紹一款名為 Duper 的社交戰爭類型遊戲，獨特玩法或特色",
    link: "duper-introduction",
  },
  {
    title: "Pirate Nation 介紹",
    author: "Funblock",
    translateBy: "chiny",
    publishedAt: "2024-10-17",
    image: "/images/tutorials/piratenation.jpeg",
    summary:
      "分析或介紹 Pirate Nation 這款全鏈遊戲，聚焦其核心機制或與區塊鏈相關的創新。",
    link: "piratenation-intro",
  },
  {
    title: "Realms s1 玩法",
    author: "Funblock",
    translateBy: "N/A",
    publishedAt: "2024-10-17",
    image: "/images/tutorials/realmsworld.jpeg",
    summary: "專注於說明 Realms.World 的第一季玩法設計和可能的策略要素。",
    link: "realms-s1-intro",
  },
];

export default function ReviewsSection() {
  return (
    <Card className="border border-black rounded-none">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">攻略</h2>
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground hover:text-black hover:no-underline p-0"
          >
            <Link href={"/tutorials"}>→</Link>
          </Button>
        </div>

        <div className="md:space-y-4">
          {articles.map((article, i) => (
            <div key={i} className="grid-cols-3">
              <Card className="h-full hover:bg-[#F3B43B] border sm:border border-none rounded-none shadow-none">
                <CardContent className="p-0">
                  <div className="flex flex-row gap-y-0 items-center">
                    <Link href={`/tutorials/${article.link}`}>
                      <div className="relative w-24 md:w-48 shrink-0 aspect-[16/9] flex items-center justify-center">
                        <Image
                          src={article.image}
                          alt=""
                          fill
                          className="object-cover rounded-none"
                        />
                      </div>
                    </Link>
                    <div className="p-4">
                      <div className="flex-2">
                        <Link
                          href={`/tutorials/${article.link}`}
                          className="hover:underline line-clamp-1"
                        >
                          <h2 className="text-lg font-semibold mb-2 line-clamp-1">
                            {article.title}
                          </h2>
                          <p className="text-gray-600 line-clamp-2 text-sm">
                            {article.summary}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
