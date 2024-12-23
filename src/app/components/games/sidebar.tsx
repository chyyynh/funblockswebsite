import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type FilterType = {
  engine: string[];
  blockchain: string[];
  gameStudio: string[];
};

interface SidebarProps {
  filters: FilterType;
  onFilterChange: (category: keyof FilterType, value: string) => void;
  onClearAll: () => void;
}

export function Sidebar({ filters, onFilterChange, onClearAll }: SidebarProps) {
  return (
    <div className="w-64 space-y-6 p-4 bg-white">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">FILTERS</h3>
          <Button variant="link" className="text-blue-600" onClick={onClearAll}>
            Clear All
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">ENGINE</h3>
        <div className="space-y-2">
          {["MUD", "Dojo", "Self built"].map((engine) => (
            <div key={engine} className="flex items-center space-x-2">
              <Checkbox
                id={`engine-${engine}`}
                checked={filters.engine.includes(engine)}
                onCheckedChange={() => onFilterChange("engine", engine)}
              />
              <label
                htmlFor={`engine-${engine}`}
                className="text-sm cursor-pointer select-none"
                onClick={() => onFilterChange("engine", engine)}
              >
                {engine}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">Blockchain</h3>
        <div className="space-y-2">
          {["Redstone", "Starknet", "Self Built"].map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox
                id={`blockchain-${item}`}
                checked={filters.blockchain.includes(item)}
                onCheckedChange={() => onFilterChange("blockchain", item)}
              />
              <label
                htmlFor={`blockchain-${item}`}
                className="text-sm cursor-pointer select-none"
                onClick={() => onFilterChange("blockchain", item)}
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">Game Studio</h3>
        <div className="space-y-2">
          {["Lattice", "Moving Castle", "Curio"].map((studio) => (
            <div key={studio} className="flex items-center space-x-2">
              <Checkbox
                id={`studio-${studio}`}
                checked={filters.gameStudio.includes(studio)}
                onCheckedChange={() => onFilterChange("gameStudio", studio)}
              />
              <label
                htmlFor={`studio-${studio}`}
                className="text-sm cursor-pointer select-none"
                onClick={() => onFilterChange("gameStudio", studio)}
              >
                {studio}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
