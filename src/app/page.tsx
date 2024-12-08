import { Search } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="text-xl font-bold">
              <span className="text-orange-500">FUN</span> BLOCKS
            </div>
            <div className="hidden md:flex relative flex-1 max-w-md">
              <Input
                className="pl-10 bg-[#f5f5f5]"
                placeholder="Search for anything"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-sm font-medium">
                Games
              </a>
              <a href="#" className="text-sm font-medium">
                Reviews
              </a>
              <a href="#" className="text-sm font-medium">
                Videos
              </a>
              <a href="#" className="text-sm font-medium">
                Events
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Play Now</Button>
            <button className="md:hidden">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* 游戏卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BOLT 卡片 */}
          <Card className="col-span-1 md:col-span-2 overflow-hidden">
            <div className="flex">
              <div className="relative aspect-square w-full md:w-[400px]">
                <Image
                  src="/images/bolt-banner.jpg"
                  alt="BOLT Game"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">BOLT</span>
                  </div>
                  <h2 className="font-medium">BOLT</h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  BOLT: Solana ecological ECS full-chain game engine
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  BOLT is a full-chain game engine developed by the Magicblock
                  team for the Solana ecosystem. This...
                </p>
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* 游戏列表卡片 */}
          <Card className="bg-white">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-900"
                >
                  GAMES
                </Badge>
                <Button variant="ghost" size="sm" className="text-gray-400">
                  →
                </Button>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "RoboCop: Rogue City",
                    rating: "8.0k",
                    tags: ["ON-CHAIN GAMES", "CRYPTO", "8+"],
                    image: "robocop.jpg",
                  },
                  {
                    title: "Mobile Bubble Shooters",
                    rating: "3.2k",
                    tags: ["ETHEREUM", "9+"],
                    image: "bubble-shooters.jpg",
                  },
                  {
                    title: "Champions Arena",
                    rating: "3.2k",
                    tags: ["FPS"],
                    image: "champions-arena.jpg",
                  },
                ].map((game, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center">
                      {i === 0 && <span className="text-2xl">🤖</span>}
                      {i === 1 && <span className="text-2xl">👁️</span>}
                      {i === 2 && <span className="text-2xl">⚔️</span>}
                    </div>
                    <div>
                      <h3 className="font-medium text-sm mb-2">{game.title}</h3>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs text-gray-500">
                          ↓ {game.rating}
                        </span>
                        {game.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Image
                      src={`/images/games/${game.image}`}
                      alt={game.title}
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* 资讯卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <Image
                src="/images/quarry-cover.jpg"
                alt="Redstone"
                width={400}
                height={150}
                className="mb-4"
              />
              <h3 className="font-medium mb-2">
                Introducing Quarry: A modern computing environment for your
                World
              </h3>
              <div className="flex gap-2">
                <Badge>BLOCKCHAIN</Badge>
                <Badge>PLATFORM</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Image
                src="/placeholder.svg"
                alt="Sky Strife"
                width={200}
                height={100}
                className="mb-4"
              />
              <h3 className="font-medium mb-2">
                A quick look at Sky Strife Season 0 update content
              </h3>
              <div className="flex gap-2">
                <Badge>ON-CHAIN GAMES</Badge>
                <Badge>UPDATE</Badge>
                <Badge>P2E</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Image
                src="/images/playerchain.jpg"
                alt="Playerchain Architecture"
                width={400}
                height={200}
                className="mb-4"
              />
              <h3 className="font-medium mb-2">Playerchain Architecture</h3>
              <div className="flex gap-2">
                <Badge>ENGINE</Badge>
                <Badge>TECH</Badge>
                <Badge>P2E</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Banner Section */}
        <div className="bg-blue-400 rounded-lg p-8 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-2xl font-bold text-black mb-2">
              Level up your gaming experience!
            </h2>
            <p className="text-black/80">
              Explore a universe of gaming content. Discover new games, learn
              from experts, and stay updated with the latest trends and news.
            </p>
          </div>

          {/* Pixel Art Icons */}
          <div className="absolute top-0 right-0 w-64 h-full">
            <div className="relative w-full h-full">
              <div className="absolute top-4 right-4 animate-pulse">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="absolute top-12 right-12 animate-bounce">
                <span className="text-3xl">⭐</span>
              </div>
              <div className="absolute top-8 right-24">
                <span className="text-3xl">❤️</span>
              </div>
              <div className="absolute top-20 right-8">
                <span className="text-3xl">💎</span>
              </div>
              <div className="absolute top-16 right-20">
                <span className="text-3xl">🗡️</span>
              </div>
              <div className="absolute top-4 right-32">
                <span className="text-3xl">🛡️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">VIDEOS</h2>
          </div>
          <div className="space-y-4">
            {[
              "Loot Survivor and the Emergence of Onchain Arcades",
              "The Four Reasons We Must Pay Attention to the Autonomous World",
              "PixeLAW: A pixel autonomous world on the entire chain",
            ].map((title, i) => (
              <Card key={i}>
                <div className="flex gap-4 p-4">
                  <div className="relative w-40 aspect-video bg-black flex-shrink-0">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute inset-0 m-auto"
                    >
                      ▶
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{title}</h3>
                    <div className="flex gap-2">
                      <Button size="sm">Watch Video</Button>
                      <Button size="sm" variant="outline">
                        More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button variant="outline">Watch More Videos</Button>
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">REVIEWS</h2>
            <Button variant="ghost" className="text-sm">
              See More →
            </Button>
          </div>
          <div className="space-y-4">
            {[
              "'Wreck League' Preview: A Promising Fighting Game With Mechs and NFTs",
              "Formula E: High Voltage Is a Fun Play-to-Earn Racer That Needs a Roadmap",
              "Raini: The Lords of Light Review",
            ].map((title, i) => (
              <Card key={i}>
                <div className="flex gap-4 p-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">{title}</h3>
                    <div className="flex gap-2">
                      <Badge>ON-CHAIN GAMES</Badge>
                      <Badge variant="outline">CRYPTO</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">
                <span className="text-orange-500">FUN</span> BLOCKS
              </div>
              <div className="text-sm text-muted-foreground">
                © 2023 Fun Blocks. All Rights Reserved.
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground">
                  Games
                </a>
                <a href="#" className="block text-sm text-muted-foreground">
                  Reviews
                </a>
                <a href="#" className="block text-sm text-muted-foreground">
                  About Fun Blocks
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground">
                  Help Center
                </a>
                <a href="#" className="block text-sm text-muted-foreground">
                  Terms & Conditions
                </a>
                <a href="#" className="block text-sm text-muted-foreground">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.374 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.626-6.626 0-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
