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
          fontFamily: ["Noto Sans CJK", "Noto Sans", "sans-serif"],
          fontWeight: "400",
          lineHeight: "1.75",
          letterSpacing: "0.02em",
          h1: {
            fontSize: "2rem",
            fontWeight: "800",
            letterSpacing: "0.03em",
            marginBottom: "1rem",
          },
          h2: {
            fontSize: "1.75rem",
            fontWeight: "800",
            letterSpacing: "0.03em",
            marginBottom: "1rem",
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: "600",
            letterSpacing: "0.02em",
            marginBottom: "1rem",
          },
          p: {
            fontSize: "1.1rem",
            lineHeight: "1.75",
            letterSpacing: "0.04em",
            marginBottom: "1.5rem",
            textAlign: "justify", // 默認設置段落文字兩端對齊
          },
          strong: {
            fontSize: "1.1rem",
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
            paddingLeft: "1rem",
            borderLeftWidth: "4px",
            borderLeftColor: "#60a5fa",
            color: "#374151",
          },
          "blockquote > p": {
            fontSize: "1.1rem",
          },
          ol: {
            paddingLeft: "2rem",
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            textAlign: "justify",
          },
          "ol > li": {
            listStyleType: "decimal",
            position: "relative",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          },
          "ol > li > ol > li": {
            marginBottom: "0rem !important",
          },
          ul: {
            paddingLeft: "2rem",
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            textAlign: "justify",
          },
          "ul > li": {
            listStyleType: "disc",
            position: "relative",
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
          },
          hr: {
            marginBottom: "1.5rem",
          },
          code: {
            padding: "0 !important",
            color: "inherit" /* 讓它繼承語法高亮的顏色 */,
          },
          pre: {
            border: "1px solid #e2e8f0",
            padding: "1rem",
            borderRadius: "6px",
            marginBottom: "1.5rem",
          },
          table: {
            borderCollapse: "collapse", // 確保表格邊框不重疊
            width: "relative", // 讓表格寬度自適應
            marginBottom: "1.5rem",
          },
          "th, td": {
            padding: "0.15rem 0.5rem", // 單元格的內邊距
            border: "1px solid #e2e8f0", // 輕微的邊框
            textAlign: "left", // 文字左對齊
          },
          thead: {
            backgroundColor: "#f7fafc", // 表頭背景色
          },
          "tbody tr:hover": {
            backgroundColor: "#e2e8f0", // 滑鼠懸停行的背景色
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
