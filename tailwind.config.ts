import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de marca terramates — cuero, madera y calabaza.
        espresso: {
          DEFAULT: "#3B2415", // texto principal / footer
          900: "#2C1A0F",
        },
        cuero: {
          50: "#FBF7F1",
          100: "#F3E9DC",
          200: "#E4CFB4",
          300: "#CDA97C",
          400: "#AD7C4C",
          500: "#8C5A32",
          600: "#6E4526",
          700: "#5A3820", // color de marca principal
          800: "#472B1A",
        },
        calabaza: {
          DEFAULT: "#BC8A3F",
          light: "#D6B478",
        },
        hueso: "#FAF6EF", // blanco cálido para fondos de catálogo
        piedra: "#EFE7D8", // divisores / fondos secundarios
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        wideish: "0.04em",
      },
      backgroundImage: {
        "stitch-line":
          "repeating-linear-gradient(90deg, currentColor 0 6px, transparent 6px 12px)",
      },
    },
  },
  plugins: [],
};

export default config;
