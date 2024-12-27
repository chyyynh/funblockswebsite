import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "Quarry 簡介：為您的世界打造的現代化運算環境",
    author: "",
    image: "quarry-cover.jpg",
    tags: ["Lattice"],
    link: "these-arent-the-bot-you-looking-for",
    summary: "",
  },
  {
    title: "Eve Frontier: CCP 基於以太坊的太空生存遊戲",
    author: "",
    image: "evefrontier.jpg",
    tags: ["ON-CHAIN GAMES", "UPDATE", "P2E"],
    link: "",
    summary: "",
  },
  {
    title: "Playerchain 架構介紹",
    author: "",
    image: "playerchain.jpg",
    tags: ["TECH"],
    link: "",
    summary: "",
  },
];

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <Card key={index} className="border border-black rounded-none h-full">
          <Link href={`/articles/${article.link}`} className="hover:underline">
            <CardContent className="p-4 flex flex-col">
              <div className="w-full h-[200px] overflow-hidden mb-4">
                <Image
                  src={`/images/${article.image}`}
                  alt={article.title}
                  width={400}
                  height={150}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold mb-4 min-h-[3rem] line-clamp-2">
                {article.title}
              </h2>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
