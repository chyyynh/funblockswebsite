import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    title:
      "'Wreck League' Preview: A Promising Fighting Game With Mechs and NFTs",
    tags: ["ON-CHAIN GAMES", "CRYPTO"],
  },
  {
    title:
      "Formula E: High Voltage Is a Fun Play-to-Earn Racer That Needs a Roadmap",
    tags: ["ETHEREUM", "NPC"],
  },
  {
    title: "Raini: The Lords of Light Review",
    tags: ["FPS", "MMORPG"],
  },
];

export default function ReviewsSection() {
  return (
    <Card className="border border-black rounded-none">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">REVIEWS</h2>
          <Button variant="ghost" className="text-sm">
            See More →
          </Button>
        </div>
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <Card key={i} className="border-none shadow-none">
              <div className="flex gap-4 p-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">{review.title}</h3>
                  <div className="flex gap-2">
                    {review.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant={index === 0 ? "default" : "outline"}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
