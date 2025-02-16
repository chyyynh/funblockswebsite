import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { getGameByID } from "@/lib/supabase/getStaticProps";

interface RelatedBadgesProps {
  related_game?: number;
}

export default async function RelatedBadges({
  related_game,
}: RelatedBadgesProps) {
  if (!related_game) return null;
  const game = (await getGameByID(related_game))[0] as {
    title: string;
    twitter_img: { pfp: string };
    link: { website?: string; twitter?: string };
  };

  return (
    <div className="mb-4 space-y-4 rounded-lg bg-[#f9f6f1] p-4">
      <Link
        href={game.link.website || game.link.twitter || "#"}
        target="_blank"
      >
        <div className="flex flex-wrap gap-5">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={game.twitter_img.pfp || "/placeholder.svg"}
              alt={game.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 space-y-1">
            <p className="font-medium text-base">{game.title}</p>
          </div>
          <ChevronRight className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
        </div>
      </Link>
    </div>
  );
}
