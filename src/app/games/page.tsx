"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

// shadcn components
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// self built components
import Header from "@/app/components/Header";
import { Sidebar } from "@/app/components/games/sidebar";
import { GameCard } from "@/app/components/games/game-card";
// import { NewTabLink } from "@/app/components/NewTabLink";
import { getAllGames } from "@/lib/supabase/getStaticProps";

export interface Game {
  id: number;
  title: string;
  type: string;
  image: string;
  engine: string;
  blockchain: string;
  gameStudio: string;
  releaseDate: string;
  link: {
    website: string;
    twitter: string;
  };
  popularity?: number;
  rating?: number;
  twitter_img: {
    pfp: string;
    banner: string;
  };
}

type FilterType = {
  engine: string[];
  blockchain: string[];
  gameStudio: string[];
};

export default function Page() {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filters, setFilters] = useState<FilterType>({
    engine: [],
    blockchain: [],
    gameStudio: [],
  });

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getAllGames();
      setAllGames(games);
      setFilteredGames(games);
    };
    fetchGames();
  }, []);

  useEffect(() => {
    let result = allGames;

    if (searchTerm) {
      result = result.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.engine.length > 0) {
      result = result.filter((game) => filters.engine.includes(game.engine));
    }
    if (filters.blockchain.length > 0) {
      result = result.filter((game) =>
        filters.blockchain.includes(game.blockchain)
      );
    }
    if (filters.gameStudio.length > 0) {
      result = result.filter((game) =>
        filters.gameStudio.includes(game.gameStudio)
      );
    }

    setFilteredGames(result);
  }, [allGames, searchTerm, sortBy, filters]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
  };

  const handleFilterChange = (category: keyof FilterType, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      engine: [],
      blockchain: [],
      gameStudio: [],
    });
    setSearchTerm("");
    setSortBy("newest");
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] bg-[url('/images/background.svg')] bg-repeat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearAll={clearAllFilters}
            />
          </div>

          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                  <div className="relative w-full sm:w-[300px]">
                    <Input
                      className="pl-8"
                      placeholder="Search Games"
                      type="search"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                  <Select value={sortBy} onValueChange={handleSort}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGames.map((game) =>
                    game.link && game.link.twitter ? (
                      <div key={game.id}>
                        <GameCard {...game} />
                      </div>
                    ) : (
                      <GameCard key={game.id} {...game} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
