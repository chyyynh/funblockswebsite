import Image from "next/image";
import { PlayCircle } from "lucide-react";

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
}

export function GamePreview(GameProps: GameProps) {
  return (
    <div className="bg-white w-full">
      <div className="relative aspect-video overflow-hidden mb-2">
        <Image
          src={GameProps.twitter_img.banner}
          alt="Game Scene"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="relative shrink-0">
            <div className="relative h-24 w-40 overflow-hidden rounded-md">
              {/* <image> should be here */}
            </div>
            {item <= 2 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <PlayCircle className="h-8 w-8 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
