import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { getGameByID } from "@/lib/supabase/getStaticProps";

interface RelatedBadgesProps {
  related_game?: number;
}

interface GameProps {
  id: number;
  slug: string;
  title: string;
  image: string;
  blockchain: string;
  engine: string;
  type: string;
  status: string;
  last_release_date: string;
  twitter_img: { pfp: string; banner: string };
  link: { website?: string; twitter?: string; doc?: string; discord?: string };
  description: string;
  game_studio: string;
  tags: string[];
}

export default async function RelatedBadges({
  related_game,
}: RelatedBadgesProps) {
  if (!related_game) return null;
  const game = (await getGameByID(related_game))[0] as GameProps;

  return (
    <div className="mb-4 space-y-6 rounded-lg bg-[#f9f6f1] p-2">
      <Link href={`/games/${game.slug}`} target="_blank">
        <div className="flex flex-row gap-1 w-full">
          <div className="flex flex-row gap-2 rounded-lg h-full w-full">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-md">
                <Image
                  src={game.twitter_img.pfp || "/placeholder.svg"}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div className="text-lg font-medium">{game.title}</div>
                {/*
                <div className="flex flex-row gap-1 items-center">
                  {game.engine && (
                    <span className="text-xs text-gray-500 bg-white px-1.5 py-0.5 rounded-full">
                      {game.engine}
                    </span>
                  )}
                  {game.blockchain && (
                    <span className="text-xs text-gray-500 bg-white px-1.5 py-0.5 rounded-full">
                      {game.blockchain}
                    </span>
                  )}
                </div>
                */}
              </div>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground justify-end" />
        </div>
      </Link>
    </div>
  );
}
