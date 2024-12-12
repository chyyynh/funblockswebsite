import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const games = [
  {
    title: "Biomes",
    downloads: "6.0 k",
    tags: ["ON-CHAIN GAMES", "CRYPTO", "8+"],
    image: "/images/games/biomes.jpg",
    bgColor: "bg-yellow-400",
  },
  {
    title: "Dopewars",
    downloads: "3.2 k",
    tags: ["ETHEREUM", "NPC", "9+"],
    image: "/images/games/dopewars.jpg",
    bgColor: "bg-emerald-500",
  },
  {
    title: "Pirates Nation",
    downloads: "3.2 k",
    tags: ["FPS", "MMORPG"],
    image: "/images/games/piratenation.jpg",
    bgColor: "bg-purple-400",
  },
];

export default function GamesList() {
  return (
    <Card className="bg-white border border-black rounded-none">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">遊戲</span>
          </div>
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground hover:text-black hover:no-underline p-0"
          >
            See More →
          </Button>
        </div>
        <div className="flex overflow-x-auto space-x-4">
          {games.map((game, i) => (
            <div key={i} className="flex flex-col gap-2 min-w-[140px]">
              <div className="aspect-square rounded-lg overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={game.image}
                    alt={game.title}
                    width={140}
                    height={140}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-base mb-1 line-clamp-2">
                  {game.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <Download className="h-4 w-4" />
                  <span>{game.downloads}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {game.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-0.5 border border-black rounded-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
