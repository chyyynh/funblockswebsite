import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export function Sidebar() {
  return (
    <div className="w-64 space-y-6 p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">FILTERS</h3>
          <Button variant="link" className="text-blue-600">
            Clear All
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">ENGINE</h3>
        <div className="space-y-2">
          {["Aragus", "Dojo", "Keystone", "MUD v1", "MUD v2", "Paima"].map(
            (engine) => (
              <div key={engine} className="flex items-center space-x-2">
                <Checkbox id={engine} />
                <label htmlFor={engine} className="text-sm">
                  {engine}
                </label>
              </div>
            )
          )}
        </div>
        <Button variant="link" className="text-blue-600 text-sm">
          +32 More
        </Button>
      </div>
      <div className="space-y-4">
        <div className="relative">
          <Input
            className="pl-8"
            placeholder="Search Blockchain"
            type="search"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          {["Play-to-Earn", "Decentralized", "DAOs"].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={item} />
              <label htmlFor={item} className="text-sm">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">GAME STUDIO</h3>
        <div className="space-y-2">
          {["Aragus", "Curio", "Dojo", "MUD", "Obelisk"].map((studio) => (
            <div key={studio} className="flex items-center space-x-2">
              <Checkbox id={studio} />
              <label htmlFor={studio} className="text-sm">
                {studio}
              </label>
            </div>
          ))}
        </div>
        <Button variant="link" className="text-blue-600 text-sm">
          +32 More
        </Button>
      </div>
    </div>
  );
}
