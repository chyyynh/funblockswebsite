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
        {/* Featured Game */}
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="relative aspect-square w-full md:w-64 bg-black">
              <Image
                src="/placeholder.svg"
                alt="BOLT Game"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    BOLT: Solana ecological ECS full-chain game engine
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    BOLT is a full-chain game engine developed by the Magicblock
                    team for the Solana ecosystem. This...
                  </p>
                </div>
                <Image
                  src="/placeholder.svg"
                  alt="BOLT Icon"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="flex gap-2">
                <Button>Play Now</Button>
                <Button variant="outline">Explore</Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Games Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">GAMES</h2>
            <Button variant="ghost" className="text-sm">
              View All →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: "RoboCop: Rogue City", rating: "9.4" },
              { title: "Mobile Bubble Shooters", rating: "8.7" },
              { title: "Champions Arena", rating: "8.9" },
            ].map((game, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square relative bg-black">
                  <Image
                    src="/placeholder.svg"
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">{game.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">★ {game.rating}</Badge>
                    <Badge variant="outline">NFT</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
