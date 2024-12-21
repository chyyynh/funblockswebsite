import Header from "@/app/components/Header";
import { Sidebar } from "@/app/components/games/sidebar";
import { GameCard } from "@/app/components/games/game-card";
// import GameCarousel from "@/app/components/games/game-carousel";
// import Head from "next/head";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { games } from "../../lib/game";

/*
const carouselGames = [
  {
    id: "Biomes",
    title: "Biomes",
    heroImage: "/images/games/biomes.jpg?height=200&width=356",
    thumbnails: [
      "/images/games/biomes.jpg?height=200&width=356",
      "/placeholder.svg?height=200&width=356",
      "/placeholder.svg?height=200&width=356",
      "/placeholder.svg?height=200&width=356",
    ],
    status: "已在 Redstone 上線",
    type: "立即遊玩",
  },
];
*/

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] bg-[url('/images/background.svg')] bg-repeat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Sidebar />
          <div className="flex-1 space-y-8">
            {/* Carousel Section */}
            {/*
            <div className="bg-[#f3b43b] rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <GameCarousel title="精選與推薦" games={carouselGames} />
              </div>
            </div>
            *}
            {/* Game Cards Section */}
            <div className="bg-white rounded-none overflow-hidden">
              <div className="p-6">
                {/* Search and Sort Section */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-[300px]">
                    <Input
                      className="pl-8"
                      placeholder="Search Games"
                      type="search"
                    />
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Game Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {games.map((game) => (
                    <GameCard key={game.title} {...game} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
