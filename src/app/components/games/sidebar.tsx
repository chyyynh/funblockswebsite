import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
// import { FilterType } from "@/app/games/page";

type FilterType = {
  engine: string[]; // 假設 engine 是 string
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
                id={engine}
                checked={filters.engine.includes(engine)}
                onChange={() => onFilterChange("engine", engine)}
              />
              <label htmlFor={engine} className="text-sm">
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
                id={item}
                checked={filters.blockchain.includes(item)}
                onChange={() => onFilterChange("blockchain", item)}
              />
              <label htmlFor={item} className="text-sm">
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
                id={studio}
                checked={filters.gameStudio.includes(studio)}
                onChange={() => onFilterChange("gameStudio", studio)}
              />
              <label htmlFor={studio} className="text-sm">
                {studio}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
