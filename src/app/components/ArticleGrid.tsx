import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Quarry 簡介：為您的世界打造的現代化運算環境",
    image: "quarry-cover.jpg",
    tags: ["Lattice"],
  },
  {
    title: "Eve Frontier: CCP 基於以太坊的太空生存遊戲",
    image: "evefrontier.jpg",
    tags: ["ON-CHAIN GAMES", "UPDATE", "P2E"],
  },
  {
    title: "Playerchain 架構介紹",
    image: "playerchain.jpg",
    tags: ["TECH"],
  },
];

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <Card key={index} className="border border-black rounded-none">
          <CardContent className="p-4">
            <Image
              src={`/images/${article.image}`}
              alt={article.title}
              width={400}
              height={150}
              className="mb-4 rounded-lg"
            />
            <h3 className="font-medium mb-4">{article.title}</h3>
            <div className="flex gap-2">
              {article.tags.map((tag, i) => (
                <Badge key={i}>{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
