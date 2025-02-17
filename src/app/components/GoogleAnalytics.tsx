"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function GoogleAnalytics({
  GA_TRACKING_ID,
}: {
  GA_TRACKING_ID: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname, GA_TRACKING_ID]);

  return null;
}
