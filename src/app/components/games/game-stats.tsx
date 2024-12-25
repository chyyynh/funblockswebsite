"use client";

import { Bar, BarChart, Line, LineChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const gameAmountData = [
  { month: "Jan", amount: 18 },
  { month: "Feb", amount: 20 },
  { month: "Mar", amount: 19 },
  { month: "Apr", amount: 21 },
  { month: "May", amount: 20 },
  { month: "Jun", amount: 23 },
];

const gameTypeData = [
  { type: "RTS", value: 14 },
  { type: "RPG", value: 5 },
  { type: "Others", value: 8 },
];

const gameEngineData = [
  { engine: "Dojo", value: 14 },
  { engine: "MUD", value: 5 },
  { engine: "Others", value: 8 },
];

const blockchainData = [
  { chain: "Starknet", value: 14 },
  { chain: "Redstone", value: 5 },
  { chain: "Self Built", value: 8 },
];

export function GameStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {/* Game Amount Chart */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-base font-medium">Game Amount</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">23</div>
          </div>
          <ChartContainer
            className="h-[100px]"
            config={{
              amount: {
                label: "Amount",
                color: "hsl(var(--primary))",
              },
            }}
          >
            <LineChart data={gameAmountData}>
              <Line
                type="monotone"
                dataKey="amount"
                strokeWidth={2}
                activeDot={{
                  r: 4,
                }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Game Type Chart */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-base font-medium">Game Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="h-[120px]"
            config={{
              value: {
                label: "Games",
                color: "hsl(var(--primary))",
              },
            }}
          >
            <BarChart data={gameTypeData} layout="vertical">
              <Bar dataKey="value" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Game Engine Chart */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-base font-medium">Game Engine</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="h-[120px]"
            config={{
              value: {
                label: "Games",
                color: "hsl(var(--primary))",
              },
            }}
          >
            <BarChart data={gameEngineData} layout="vertical">
              <Bar dataKey="value" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Blockchain Chart */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-base font-medium">Blockchain</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="h-[120px]"
            config={{
              value: {
                label: "Games",
                color: "hsl(var(--primary))",
              },
            }}
          >
            <BarChart data={blockchainData} layout="vertical">
              <Bar dataKey="value" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
