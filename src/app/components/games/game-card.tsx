import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface GameCardProps {
  title: string;
  image: string;
  engine: string;
  tags: string[];
}

export function GameCard({ title, image, engine, tags }: GameCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute left-2 top-2 bg-white px-2 py-1 text-xs font-semibold">
            {engine}
          </div>
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="aspect-video object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 font-semibold">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
