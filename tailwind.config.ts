import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#f0e7d5",
          50: "#fdf9f4",
          100: "#f8f0e3",
          200: "#f0e7d5",
          300: "#e4d0b3",
          400: "#d4b48a",
          500: "#c49a68",
        },
        navy: {
          DEFAULT: "#212842",
          50: "#f0f1f5",
          100: "#d4d7e5",
          200: "#a8aecb",
          300: "#7b84b0",
          400: "#4e5a96",
          500: "#2e3a6e",
          600: "#212842",
          700: "#1a2035",
          800: "#131828",
          900: "#0c101a",
        },
        gold: {
          DEFAULT: "#c9a96e",
          light: "#e8d5b0",
          dark: "#a07840",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-navy": "linear-gradient(135deg, #212842 0%, #1a2035 50%, #0c101a 100%)",
        "gradient-cream": "linear-gradient(135deg, #fdf9f4 0%, #f0e7d5 50%, #e4d0b3 100%)",
        "gradient-luxury": "linear-gradient(135deg, #212842 0%, #2e3a6e 40%, #212842 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "shimmer": "shimmer 2s infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
