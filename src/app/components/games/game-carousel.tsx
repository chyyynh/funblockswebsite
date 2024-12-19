"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GameCarouselProps {
  title: string;
  games: {
    id: string;
    title: string;
    heroImage: string;
    thumbnails: string[];
    status: string;
    type: string;
  }[];
}

export default function GameCarousel({ title, games }: GameCarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
        setApi={(api) => {
          if (api) {
            api.on("select", () => {
              setCurrentSlide(api.selectedScrollSnap());
            });
          }
        }}
      >
        <CarouselContent>
          {games.map((game, index) => (
            <CarouselItem key={game.id} className="md:basis-full">
              <Card className="bg-[#1B2838] text-white">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[2fr,1fr] gap-4">
                    {/* Hero Image */}
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={game.heroImage}
                        alt={game.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>

                    {/* Right Side Content */}
                    <div className="p-4">
                      <h3 className="text-2xl font-bold mb-4">{game.title}</h3>

                      {/* Thumbnails Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {game.thumbnails.map((thumbnail, idx) => (
                          <div key={idx} className="relative aspect-[16/9]">
                            <Image
                              src={thumbnail}
                              alt={`${game.title} screenshot ${idx + 1}`}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Status and Type */}
                      <div className="mt-4 space-y-2">
                        <div className="text-lg">{game.status}</div>
                        <Button className="w-full">{game.type}</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {games.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === idx ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
