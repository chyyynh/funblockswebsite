import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const articles = [
  {
    title: "Quarry 簡介：為您的世界打造的現代化運算環境",
    author: "Lattice",
    translateBy: "chiny",
    publishedAt: "2024-10-17",
    image: "/images/articles/duper.jpg",
    summary: "uuuuu",
    link: "",
  },
  {
    title: "链上现实最大主义",
    author: "Raf (from 1kx)",
    translateBy: "chiny",
    publishedAt: "2024-10-17",
    image: "/images/articles/duper.jpg",
    summary: "uuuuu",
    link: "",
  },
  {
    title: "社交战争游戏Duper玩法介绍",
    author: "chiny",
    translateBy: "N/A",
    publishedAt: "2024-10-17",
    image: "/images/articles/duper.jpg",
    summary: "uuuuu",
    link: "duper-introduction",
  },
];

export default function ReviewsSection() {
  return (
    <Card className="border border-black rounded-none">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">文章</h2>
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground hover:text-black hover:no-underline p-0"
          >
            <Link href={"/articles"}>→</Link>
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
