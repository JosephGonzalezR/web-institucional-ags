import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        // Identidad AGS — editorial: marfil / azul marino / dorado (del logo del globo).
        marfil: "#F2EFE2",
        paper: "#F7F4EC",
        ink: "#0B1B33", // texto/base navy
        navy: {
          DEFAULT: "#0B1B33",
          900: "#0B1B33",
          800: "#122845",
          700: "#1A3357",
        },
        gold: {
          DEFAULT: "#B8863B",
          dark: "#9A6E2E", // dorado legible para texto pequeno
          light: "#C9A24A", // dorado sobre navy
        },
        muted: "#37455C", // texto secundario sobre marfil
        "muted-2": "#5C6472",
        line: "rgba(11,27,51,0.12)", // hairline sobre marfil
        "line-navy": "rgba(242,239,226,0.14)", // hairline sobre navy
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.16em",
        tightest: "-0.024em",
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,27,51,0.05)",
        lift: "0 24px 60px -34px rgba(11,27,51,0.45)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.8s ease-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
