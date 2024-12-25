import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const guides = [
  {
    title:
      "'Wreck League' Preview: A Promising Fighting Game With Mechs and NFTs",
    image: "wreck-league.jpg",
  },
  {
    title:
      "'Wreck League' Preview: A Promising Fighting Game With Mechs and NFTs",
    image: "wreck-league.jpg",
  },
  {
    title:
      "'Wreck League' Preview: A Promising Fighting Game With Mechs and NFTs",
    image: "wreck-league.jpg",
  },
];

export default function GuidesSection() {
  return (
    <Card className="border border-black rounded-none">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Tutorials</h2>
          <Button variant="ghost" className="text-sm">
            →
          </Button>
        </div>
        <div className="space-y-4">
          {guides.map((guide, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="relative w-16 h-16 bg-emerald-100 rounded-lg flex-shrink-0">
                <Image
                  src={`/images/${guide.image}`}
                  alt={guide.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm">{guide.title}</h3>
              </div>
              <Button variant="ghost" size="sm">
                <Link href={"/tutorials"}>→</Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
