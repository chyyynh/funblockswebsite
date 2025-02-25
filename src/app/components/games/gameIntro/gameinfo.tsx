import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface GameProps {
  id: number;
  title: string;
  image: string;
  blockchain: string;
  engine: string;
  type: string;
  status: string;
  twitter_img: { pfp: string; banner: string };
  link: { website?: string; twitter?: string };
  description: string;
  game_studio: string;
  tags: string[];
}

export function GameInfo(GameProps: GameProps) {
  return (
    <div className="bg-white rounded-none w-full">
      <div className="relative aspect-video overflow-hidden rounded-none">
        <Image
          src={GameProps.twitter_img.banner}
          alt="Game Banner"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-black text-base mt-4 mb-4">{GameProps.description}</p>
      <div className="space-y-1 text-sm mb-2">
        <div className="flex justify-between">
          <span className="text-slate-400">發行商：</span>
          <span className="text-blue-400">
            {GameProps.game_studio ? GameProps.game_studio : GameProps.title}
          </span>
        </div>
      </div>
      <div className="space-y-1 text-sm mb-2">
        <div className="flex justify-between">
          <span className="text-slate-400">網站</span>
          <span className="text-blue-400">
            {GameProps.link.website ? GameProps.link.website : " - "}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">推特</span>
          <span className="text-blue-400">
            {GameProps.link.twitter ? GameProps.link.twitter : "-"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Discord</span>
          <span className="text-blue-400">{"-"}</span>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm text-slate-400">熱門標籤：</p>
        <div className="flex flex-wrap gap-2">
          {GameProps.tags &&
            Array.isArray(GameProps.tags) &&
            GameProps.tags.length > 0 &&
            GameProps.tags.map((tag, i) => (
              <Badge key={i} variant="outline">
                {tag}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
}
