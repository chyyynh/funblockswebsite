"use client";

import Image from "next/image";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Intro() {
  const isMobile = useIsMobile();

  return (
    <div className="relative ">
      {isMobile && (
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/funblocks_logo_sq.jpg"
            alt="FunBlocks Logo"
            width={200}
            height={200}
            className="rounded-none"
          />
          <div className="text-center text-sm">有趣積木，無限可能</div>
        </div>
      )}
    </div>
  );
}
