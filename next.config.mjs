import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
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
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
