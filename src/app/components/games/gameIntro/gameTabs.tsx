"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GameTabsProps {
  gameIntroContent: React.ReactNode;
  assetIntroContent: React.ReactNode;
}

export function GameTabs({
  gameIntroContent,
  assetIntroContent,
}: GameTabsProps) {
  const [currentTab, setCurrentTab] = useState<"gameIntro" | "assetIntro">(
    "gameIntro"
  );

  return (
    <Tabs
      value={currentTab}
      onValueChange={(value: string) =>
        setCurrentTab(value as "gameIntro" | "assetIntro")
      }
      className="w-full"
    >
      <TabsList>
        <TabsTrigger value="gameIntro">遊戲介紹</TabsTrigger>
        <TabsTrigger value="assetIntro">資產介紹</TabsTrigger>
      </TabsList>
      <TabsContent value="gameIntro">{gameIntroContent}</TabsContent>
      <TabsContent value="assetIntro">{assetIntroContent}</TabsContent>
    </Tabs>
  );
}
