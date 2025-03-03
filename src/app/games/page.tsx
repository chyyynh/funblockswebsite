"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Search, Grid, List } from "lucide-react";

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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// self built components
import Header from "@/app/components/Header";
import { GameCard } from "@/app/components/games/game-card";
import { GameList } from "@/app/components/games/game-list";
import { getAllGames } from "@/lib/supabase/getStaticProps";
import { Badge } from "@/app/components/games/badge";

export interface Game {
  id: number;
  title: string;
  slug: string;
  type: string;
  status: string;
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
  status: string[];
  engine: string[];
  blockchain: string[];
  gameStudio: string[];
};

type LayoutType = "grid" | "list";

export default function Page() {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [layout, setLayout] = useState<LayoutType>("grid");
  const [filters, setFilters] = useState<FilterType>({
    status: [],
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
    result = result.filter(
      (game) =>
        (filters.engine.length === 0 || filters.engine.includes(game.engine)) &&
        (filters.blockchain.length === 0 ||
          filters.blockchain.includes(game.blockchain)) &&
        (filters.gameStudio.length === 0 ||
          filters.gameStudio.includes(game.gameStudio)) &&
        (filters.status.length === 0 || filters.status.includes(game.status))
    );
    setFilteredGames(result);
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

  const handleLayoutChange = (value: string) => {
    if (value === "grid" || value === "list") {
      setLayout(value);
    }
  };

  const filterOptions: {
    label: string;
    key: keyof FilterType;
    options: string[];
  }[] = [
    {
      label: "Status",
      key: "status",
      options: ["play now"],
    },
    {
      label: "Engine",
      key: "engine",
      options: ["MUD", "Dojo", "PoP"],
    },
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
    <div className="min-h-screen sm:bg-[#FAF9F6] sm:bg-[url('/images/background.svg')] bg-repeat">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-8 max-w-full">
            <div className="bg-white rounded-none shadow-none overflow-hidden">
              <div className="sm:p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
                  {/* Search with fixed width */}
                  <div className="relative w-full sm:w-[200px] ">
                    <Input
                      className="pl-8"
                      placeholder="Search Games"
                      type="search"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>

                  {/* Filter Buttons container with responsive width */}
                  <div className="flex gap-2 overflow-x-auto w-full sm:w-[calc(100%-432px)] max-w-full scrollbar-thin">
                    {filterOptions.map((filter) => (
                      <div
                        key={filter.key}
                        className="flex flex-col flex-shrink-0"
                      >
                        <div className="flex flex-nowrap gap-2">
                          {filter.options.map((option) => (
                            <Button
                              key={option}
                              onClick={() =>
                                handleFilterChange(filter.key, option)
                              }
                              className={`w-auto rounded-lg border border-gray-300 px-0.5 whitespace-nowrap ${
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

                  {/* Layout Toggle and Sort Select */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <ToggleGroup
                      type="single"
                      value={layout}
                      onValueChange={(value: string) => {
                        handleLayoutChange(value as LayoutType);
                      }}
                      className="border rounded-md"
                    >
                      <ToggleGroupItem
                        value="grid"
                        aria-label="Grid view"
                        className={`${
                          layout === "grid" ? "bg-muted" : "hover:bg-muted/50"
                        }`}
                      >
                        <Grid className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="list"
                        aria-label="List view"
                        className={`${
                          layout === "list" ? "bg-muted" : "hover:bg-muted/50"
                        }`}
                      >
                        <List className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>

                    <div className="relative w-full sm:w-[200px] flex-shrink-0">
                      <Select value={sortBy} onValueChange={handleSort}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sort By" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Newest</SelectItem>
                          <SelectItem value="popular">Most Popular</SelectItem>
                          <SelectItem value="rating">Highest Rated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Conditional rendering based on layout */}
                {layout === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredGames.map((game) => (
                      <GameCard key={game.id} {...game} />
                    ))}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 text-left border-b w-12">
                            #
                          </th>
                          <th className="py-2 px-4 text-left border-b">
                            Game Name
                          </th>
                          <th className="py-2 px-4 text-center border-b">
                            Players
                          </th>
                          <th className="py-2 px-4 text-center border-b">
                            Follower
                          </th>
                          <th className="py-2 px-4 text-center border-b">
                            Release Phase
                          </th>
                          <th className="py-2 px-4 text-right border-b">
                            Rating
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredGames.map((game) => (
                          <GameList key={game.id} {...game} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
