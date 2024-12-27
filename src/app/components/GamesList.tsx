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

import { getAllGames } from "@/lib/supabase/getStaticProps";

const games = await getAllGames();

export default function GamesList() {
  return (
    <Card className="bg-white border border-black rounded-none relative group">
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
          <CarouselContent>
            {games.map((game, i) => (
              <CarouselItem key={i} className="md:basis-1/2">
                <div className="flex flex-col gap-2 p-1">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={game.twitter_img.pfp}
                        alt={game.title}
                        width={250}
                        height={250}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 line-clamp-2">
                      {game.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs px-2 py-0.5 border border-black rounded-none">
                        {game.engine}
                      </span>
                      <span className="text-xs px-2 py-0.5 border border-black rounded-none">
                        {game.blockchain}
                      </span>
                      <span className="text-xs px-2 py-0.5 border border-black rounded-none">
                        {game.game_studio}
                      </span>
                    </div>
                  </div>
                </div>
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
