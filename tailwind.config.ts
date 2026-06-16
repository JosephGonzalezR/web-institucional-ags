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
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Identidad AGS: oro metalico sobre azul marino profundo (del logo).
        ink: "#0a1424",
        panel: "#0f1f38",
        "panel-2": "#15294a",
        line: "rgba(214, 178, 94, 0.16)",
        // Oro de marca (el aguila del logo). brand y accent comparten escala.
        brand: {
          50: "#fbf4dc",
          100: "#f6e8b6",
          200: "#efd488",
          300: "#e8c16a",
          400: "#dca73d",
          500: "#c9962e",
          600: "#a87a22",
          700: "#85601b",
        },
        accent: {
          400: "#e8c16a",
          500: "#dca73d",
          600: "#c9962e",
        },
        navy: {
          800: "#0f1f38",
          900: "#0a1424",
          950: "#070f1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(220,167,61,0.22), 0 20px 60px -18px rgba(220,167,61,0.35)",
        gold: "0 18px 50px -16px rgba(220,167,61,0.4)",
        panel:
          "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.85)",
        lift: "0 30px 70px -28px rgba(0,0,0,0.75), 0 0 0 1px rgba(220,167,61,0.25)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(214,178,94,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(214,178,94,0.07) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(220,167,61,0.18) 0%, rgba(10,20,36,0) 70%)",
        "gold-sheen":
          "linear-gradient(180deg,#fbf4dc 0%,#e8c16a 45%,#c9962e 75%,#a87a22 100%)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.5)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(0,-24px) scale(1.06)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(18px,16px) scale(1.1)" },
        },
        sheen: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-ring": "pulse-ring 2.6s ease-out infinite",
        float: "float 9s ease-in-out infinite",
        "float-slow": "float-slow 13s ease-in-out infinite",
        sheen: "sheen 6s linear infinite",
        "spin-slow": "spin-slow 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
