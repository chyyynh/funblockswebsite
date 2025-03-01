"use client";
import { Tabs } from "@chakra-ui/react";
import { useState } from "react";

export function GameTabs() {
  const [value, setValue] = useState("first");

  return (
    <Tabs.Root
      value={value}
      onValueChange={(e) => setValue(e.value)} // ✅ 這樣也可以
      className="text-gray-400 border-black"
      variant={"outline"}
      defaultValue="first"
    >
      <Tabs.List
        defaultValue="first"
        className="border-b-2 border-gray-400 h-auto font-semibold"
      >
        <Tabs.Trigger
          value="first"
          className="px-3 border-b-2 border-transparent hover:text-black focus:border-black focus:text-black data-[selected]:border-black data-[selected]:text-black !text-lg"
        >
          遊戲介紹
        </Tabs.Trigger>
        <Tabs.Trigger
          value="second"
          className="px-3 border-b-2 border-transparent hover:text-black focus:border-black focus:text-black data-[selected]:border-black data-[selected]:text-black !text-lg"
        >
          資產介紹
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="first">遊戲介紹</Tabs.Content>
      <Tabs.Content value="second">資產介紹</Tabs.Content>
    </Tabs.Root>
  );
}
