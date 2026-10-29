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
        cafe: {
          950: "#090706",
          900: "#0f0b09",
          850: "#15100d",
          800: "#1c1511",
          750: "#231a15",
          700: "#2d2219",
          600: "#3d2e23",
          500: "#5c4535",
          400: "#8a6a55",
          300: "#b99680",
          200: "#d8c0af",
          100: "#f0e6de",
          gold: "#E8A020",
          amber: "#F5B731",
          "gold-muted": "#C78B18",
          cream: "#FDF6ED",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        "radial-gold": "radial-gradient(ellipse at center, rgba(232,160,32,0.15) 0%, transparent 70%)",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(232,160,32,0.2) 0%, transparent 60%)",
      },
      boxShadow: {
        "gold-sm": "0 0 12px rgba(232,160,32,0.15)",
        "gold-md": "0 0 24px rgba(232,160,32,0.2), 0 0 60px rgba(232,160,32,0.08)",
        "gold-lg": "0 0 40px rgba(232,160,32,0.25), 0 0 100px rgba(232,160,32,0.1)",
        "card": "0 4px 6px -1px rgba(0,0,0,0.5), 0 2px 4px -1px rgba(0,0,0,0.3)",
        "card-hover": "0 20px 40px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,160,32,0.15)",
        "inset-dark": "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.3)",
      },
      animation: {
        "float": "float 7s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(0.5deg)" },
          "66%": { transform: "translateY(-4px) rotate(-0.5deg)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(232,160,32,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(232,160,32,0.4), 0 0 80px rgba(232,160,32,0.15)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
