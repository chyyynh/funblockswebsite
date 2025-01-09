import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    title: "Fully On-Chain Game: Force Prime v0.3",
    description:
      "Loot Survivor[1] is the first game in the Realms Autonomous Worlds ecosystem. It was developed...",
    link: "https://www.youtube.com/watch?v=_WS8-keJyNs",
    image: "/images/articles/duper.jpg",
  },
  {
    title: "Life @AW House DENVER Highlights Recap!",
    description:
      "During the last crypto bull bubble cycle, decentralized finance (DeFi) was undoubtedly ce...",
    link: "https://www.youtube.com/watch?v=3a2OxvKWYeo",
    image: "/images/articles/duper.jpg",
  },
  {
    title: "Fully On-Chain Game: Sky Strife 0.1",
    description:
      "What exactly is PixeLAW? If you think that PixelLAW is just a pixel game on the entire chain...",
    link: "https://www.youtube.com/watch?v=48VaVnPz1cA",
    image: "/images/articles/duper.jpg",
  },
];

export default function ReviewsSection() {
  return (
    <Card className="border border-black rounded-none">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">影片</h2>
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground hover:text-black hover:no-underline p-0"
          >
            <Link href={"/tutorials"}>→</Link>
          </Button>
        </div>

        <div className="space-y-4">
          {videos.map((video, i) => (
            <div key={i} className="flex gap-4">
              <div className="relative w-[160px] aspect-video bg-black flex-shrink-0">
                <Image
                  src={video.image}
                  alt=""
                  fill
                  className="aspect-video object-cover rounded-none"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg mb-2 line-clamp-2">
                  <Link
                    href={`/articles/${video.link}`}
                    className="hover:underline"
                  >
                    {video.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
