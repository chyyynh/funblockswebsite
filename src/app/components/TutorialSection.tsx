import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "社交戰爭遊戲 Duper 介紹",
    author: "Funblock",
    translateBy: "chiny",
    publishedAt: "2024-10-17",
    image: "/images/articles/duper.jpg",
    summary: "介紹一款名為 Duper 的社交戰爭類型遊戲，獨特玩法或特色",
    link: "",
  },
  {
    title: "全鏈遊戲 Pirate Nation 介紹",
    author: "Funblock",
    translateBy: "chiny",
    publishedAt: "2024-10-17",
    image: "/images/tutorials/piratenation.jpeg",
    summary:
      "分析或介紹 Pirate Nation 這款全鏈遊戲，聚焦其核心機制或與區塊鏈相關的創新。",
    link: "",
  },
  {
    title: "全鏈遊戲 Realms.World 第一季玩法",
    author: "Funblock",
    translateBy: "N/A",
    publishedAt: "2024-10-17",
    image: "/images/tutorials/realmsworld.jpeg",
    summary: "專注於說明 Realms.World 的第一季玩法設計和可能的策略要素。",
    link: "duper-introduction",
  },
];

export default function ReviewsSection() {
  return (
    <Card className="border border-black rounded-none">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">攻略</h2>
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground hover:text-black hover:no-underline p-0"
          >
            <Link href={"/tutorials"}>→</Link>
          </Button>
        </div>

        <div className="space-y-4">
          {articles.map((articles, i) => (
            <div key={i} className="flex gap-4">
              <div className="relative w-[160px] aspect-video bg-black flex-shrink-0">
                <Image
                  src={articles.image}
                  alt=""
                  fill
                  className="object-cover rounded-none"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg mb-2">
                  <Link
                    href={`/articles/${articles.link}`}
                    className="hover:underline"
                  >
                    {articles.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {articles.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
