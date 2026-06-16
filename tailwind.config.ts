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
        // Paleta institucional sobria y tecnologica (modo oscuro).
        ink: "#060a13",
        panel: "#0b1220",
        "panel-2": "#101a2e",
        line: "rgba(148, 163, 184, 0.14)",
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
        },
        accent: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,0.18), 0 18px 60px -20px rgba(56,189,248,0.35)",
        panel: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(56,189,248,0.16) 0%, rgba(6,10,19,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse_ring: {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-ring": "pulse_ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
