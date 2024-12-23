"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import { Sidebar } from "@/app/components/games/sidebar";
import { GameCard } from "@/app/components/games/game-card";
import { getAllGames } from "@/lib/supabase/getStaticProps";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export interface Game {
  id: number;
  title: string;
  status: string;
  type: string;
  image: string;
  engine: string;
  blockchain: string;
  gameStudio: string;
  popularity?: number;
  rating?: number;
  releaseDate: string;
}

type FilterType = {
  engine: string[]; // 假設 engine 是 string
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

    // Apply search
    if (searchTerm) {
      result = result.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply filters
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

  interface HandleSearch {
    (e: React.ChangeEvent<HTMLInputElement>): void;
  }

  const handleSearch: HandleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  interface HandleSort {
    (value: string): void;
  }

  const handleSort: HandleSort = (value) => {
    setSortBy(value);
  };

  interface HandleFilterChange {
    (category: keyof FilterType, value: string): void;
  }

  const handleFilterChange: HandleFilterChange = (category, value) => {
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
        <div className="flex gap-8">
          <Sidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearAll={clearAllFilters}
          />
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-none overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative w-[300px]">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGames.map((game) => (
                    <GameCard key={game.id} {...game} />
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
