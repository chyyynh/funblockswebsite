import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    typography: {
      DEFAULT: {
        css: {
          color: "#333",
          fontFamily: ["Noto Sans CJK", "sans-serif"], // 直接設置字型
          fontWeight: "400",
          lineHeight: "1.75", // 增加行距讓中文更易讀
          letterSpacing: "0.02em", // 微調字距

          h1: {
            fontSize: "2rem",
            fontWeight: "800",
            lineHeight: "2",
            letterSpacing: "0.03em",
          },
          h2: {
            fontSize: "1.75rem",
            fontWeight: "800",
            lineHeight: "2",
            letterSpacing: "0.03em",
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: "600",
            lineHeight: "2",
            letterSpacing: "0.02em",
          },
          p: {
            fontSize: "1.1rem",
            lineHeight: "1.75",
            letterSpacing: "0.04em",
            marginBottom: "1.5rem",
          },
          strong: {
            fontWeight: "1200",
          },
          a: {
            color: "#2563eb",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
          blockquote: {
            fontStyle: "italic",
            borderLeftWidth: "4px",
            borderLeftColor: "#60a5fa",
            paddingLeft: "1rem",
            color: "#374151",
          },
          "ul > li::before": {
            backgroundColor: "#60a5fa",
          },
          code: {
            backgroundColor: "#f3f4f6",
            padding: "2px 4px",
            borderRadius: "4px",
          },
          pre: {
            backgroundColor: "#1f2937",
            color: "#f9fafb",
            padding: "1rem",
            borderRadius: "6px",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
