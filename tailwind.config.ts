import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        third: "#c78390",
        cream: "#FAF8F5",
        warm: "#F5F0EB",
        "warm-dark": "#E8E0D8",
        brand: {
          DEFAULT: "#c78390",
          dark: "#B06B78",
          light: "#D9A5AF",
        },
        gold: "#B8967A",
        charcoal: "#1A1A1A",
        "soft-black": "#2C2C2C",
        "body-text": "#5A5A5A",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-noto-sans-kr)", "sans-serif"],
      },
      letterSpacing: {
        "widest-xl": "0.2em",
        "widest-2xl": "0.3em",
      },
      transitionDuration: {
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
    },
  },
  plugins: [],
};
export default config;
