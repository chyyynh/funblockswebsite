import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Twitter } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/app/components/games/badge";

interface GameCardProps {
  id: number;
  title: string;
  image: string;
  blockchain: string;
  engine: string;
  type: string;
  twitter_img: { pfp: string; banner: string };
  link: { website?: string; twitter?: string };
}

export function GameCard(props: GameCardProps) {
  const {
    title = "Unknown",
    blockchain = "N/A",
    engine = "N/A",
    type = "unknown",
    twitter_img,
    link,
  } = props;

  return (
    <div className="overflow-visible">
      <Card className="overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-none">
        <CardContent className="p-0">
          <div className="relative">
            <div className="absolute left-2 top-2 bg-white px-2 py-1 text-xs font-semibold">
              {type}
            </div>
            <Image
              src={twitter_img.banner || "/placeholder.svg"}
              alt={title}
              width={400}
              height={225}
              className="aspect-video object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-1">
              <Badge type={blockchain} />
              <Badge type={engine} />
            </div>
            <div className="flex ">
              {link.website && (
                <Link href={link.website} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-primary hover:bg-[#F3B43B]"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="sr-only">Website</span>
                    </Button>
                  </a>
                </Link>
              )}
              {link.twitter && (
                <Link href={link.twitter} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-primary hover:bg-[#F3B43B]"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
