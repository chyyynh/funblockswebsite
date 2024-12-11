import Header from "@/app/components/Header";
import { Sidebar } from "@/app/components/games/sidebar";
import { GameCard } from "@/app/components/games/game-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const games = [
  {
    title: "Alchemist: The World Adventure",
    image: "/placeholder.svg",
    engine: "PAIMA",
    tags: ["PROMOTION", "PLATFORM", "2+"],
  },
  {
    title: "ClimBros: The Mountain Ride",
    image: "/placeholder.svg",
    engine: "MUD V2",
    tags: ["PROMOTION", "PLATFORM", "2+"],
  },
  {
    title: "The Uplift: Crypto Mind",
    image: "/placeholder.svg",
    engine: "WORLD ENGINE",
    tags: ["PROMOTION", "PLATFORM", "2+"],
  },
  // Add more games as needed
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Sidebar />
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <div className="relative w-[300px]">
                <Input
                  className="pl-8"
                  placeholder="Search Videos"
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {games.map((game) => (
                <GameCard key={game.title} {...game} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
