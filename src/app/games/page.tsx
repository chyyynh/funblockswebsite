"use client";

import { useState, useEffect, useMemo } from "react";
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
import { Button } from "@/components/ui/button";

// self built components
import Header from "@/app/components/Header";
import { GameCard } from "@/app/components/games/game-card";
import { getAllGames } from "@/lib/supabase/getStaticProps";
import { Badge } from "@/app/components/games/badge";

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

  const filterGamesByCategory = (
    games: Game[],
    category: keyof FilterType,
    filterValues: string[]
  ) => {
    if (filterValues.length === 0) {
      return games;
    }
    return games.filter((game) =>
      filterValues.includes(game[category] as string)
    );
  };

  useMemo(() => {
    let result = allGames;

    if (searchTerm) {
      result = result.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result = filterGamesByCategory(result, "engine", filters.engine);
    result = filterGamesByCategory(result, "blockchain", filters.blockchain);
    result = filterGamesByCategory(result, "gameStudio", filters.gameStudio);

    setFilteredGames(result); // 使用 setFilteredGames 更新狀態
    return result; // 返回 result
  }, [allGames, searchTerm, filters]);

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

  const filterOptions: {
    label: string;
    key: keyof FilterType;
    options: string[];
  }[] = [
    { label: "Engine", key: "engine", options: ["MUD", "Dojo", "PoP"] },
    {
      label: "Blockchain",
      key: "blockchain",
      options: ["Redstone", "Starknet", "ABS", "Base"],
    },
    {
      label: "Game Studio",
      key: "gameStudio",
      options: [],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] bg-[url('/images/background.svg')] bg-repeat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
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
                  <div className="flex flex-auto gap-2 overflow-x-auto whitespace-nowrap">
                    {filterOptions.map((filter) => (
                      <div key={filter.key} className="flex flex-col">
                        <div className="flex flex-nowrap gap-2">
                          {filter.options.map((option) => (
                            <Button
                              key={option}
                              onClick={() =>
                                handleFilterChange(filter.key, option)
                              }
                              className={`rounded-lg border border-gray-300  ${
                                filters[filter.key].includes(option)
                                  ? "bg-[#F3B43B] text-black hover:bg-[#F3B43B]"
                                  : "bg-white text-black hover:bg-white"
                              }`}
                            >
                              <Badge type={option} />
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
