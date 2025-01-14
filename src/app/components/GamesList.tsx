import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/app/components/games/badge";

import { getAllGames } from "@/lib/supabase/getStaticProps";

const games = await getAllGames();

export default function GamesList() {
  return (
    <Card className="bg-white border border-black rounded-none relative group">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-lg font-bold">遊戲</span>
          </div>
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground hover:text-black hover:no-underline p-0"
          >
            <Link href={"/games"}>→</Link>
          </Button>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-2">
            {games.map((game, i) => (
              <CarouselItem
                key={i}
                className="pl-2 md:pl-4 basis-5/12 sm:basis-1/2"
              >
                <Link href={`/games/${game.id}`} key={i}>
                  <div className="flex flex-col gap-2 p-1 hover:bg-[#F3B43B] rounded-lg h-full">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={game.twitter_img.pfp}
                          alt={game.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-base md:text-lg mb-1 line-clamp-1">
                        {game.title}
                      </div>
                      <div className="flex flex-wrap ">
                        <Badge type={game.engine} />
                        <Badge type={game.blockchain} />
                      </div>
                    </div>
                    <div className="font-normal hidden md:block text-sm line-clamp-2">
                      {game.description}
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 -mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <CarouselPrevious className="relative pointer-events-auto h-8 w-8 border-black" />
            <CarouselNext className="relative pointer-events-auto h-8 w-8 border-black" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
}
