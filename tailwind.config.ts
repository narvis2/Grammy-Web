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
        stay: {
          50: "#faf9f7",
          100: "#f2efe9",
          200: "#e6dfd3",
          300: "#d5c8b5",
          400: "#bfae94",
          500: "#a6956f",
          600: "#8c7356",
          700: "#735c45",
          800: "#5a4636",
          900: "#3f3025",
          950: "#2a221a",
        },
        // 하위 호환 매핑 (기존 클래스 → stay 값)
        third: "#bfae94",
        cream: "#faf9f7",
        warm: "#f2efe9",
        "warm-dark": "#e6dfd3",
        brand: {
          DEFAULT: "#3f3025",
          dark: "#5a4636",
          light: "#bfae94",
        },
        gold: "#bfae94",
        charcoal: "#2a221a",
        "soft-black": "#2a221a",
        "body-text": "#8c7356",
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
