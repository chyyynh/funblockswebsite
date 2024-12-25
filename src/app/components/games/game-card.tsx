import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface GameCardProps {
  id: number;
  title: string;
  image: string;
  blockchain: string;
  engine: string;
}

export function GameCard(props: GameCardProps) {
  const {
    title = "Unknown",
    image = "/images/default.jpg",
    blockchain = "N/A",
    engine = "N/A",
  } = props;

  return (
    <div className="overflow-visible">
      <Card className="overflow-hidden transform transition-transform duration-300 hover:bg-[#F3B43B] hover:scale-105 shadow-none">
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
              <Badge variant="secondary">{blockchain}</Badge>
              <Badge variant="secondary">{engine}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
