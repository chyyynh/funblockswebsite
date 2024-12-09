import { Card, CardContent } from "@/components/ui/card";

const guilds = [
  {
    name: "Funcraft Guild",
    members: 120,
    description: "專注於 Web3 遊戲開發的公會",
    image: "/images/guilds/funcraft.jpg",
  },
  // 添加更多公會...
];

export default function GuildsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Funcraft Guilds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guilds.map((guild, i) => (
          <Card key={i} className="border border-black rounded-none">
            <CardContent className="p-4">
              <h2 className="font-bold mb-2">{guild.name}</h2>
              <p className="text-sm text-gray-600 mb-2">
                Members: {guild.members}
              </p>
              <p className="text-sm">{guild.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
