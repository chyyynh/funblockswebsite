import { fileURLToPath } from "url";
// import { dirname } from "path";

// ESM 版本的 __filename 和 __dirname
const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.mirror-media.xyz",
        pathname: "/**", // 匹配所有路徑
      },
      {
        protocol: "https",
        hostname: "substackcdn.com",
        pathname: "/image/fetch/**", // 匹配圖片 fetch API 的所有路徑
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "/v2/**", // 適配 Medium 的圖片連結
      },
      {
        protocol: "https",
        hostname: "video.twimg.com",
        pathname: "/**", // 適配所有 Twitter 的圖片連結
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "/**", // 適配所有 Twitter 的圖片連結
      },
      {
        protocol: "https",
        hostname: "hackmd.io",
        pathname: "/**", // 匹配所有路徑
      },
      {
        protocol: "https",
        hostname: "www.evefrontier.com",
        pathname: "/**", // 匹配所有路徑
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**", // 匹配所有路徑
      },
      {
        protocol: "https",
        hostname: "supercell.com",
        pathname: "/**", // 匹配所有路徑
      },
    ],
  },

  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
      store: "pack", // 使用 PackFileCacheStrategy
      compression: "gzip", // 啟用壓縮以減少快取大小
    };
    return config;
  },
};

// Merge MDX config with Next.js config
export default nextConfig;
