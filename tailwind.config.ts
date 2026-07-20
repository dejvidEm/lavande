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
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-soft": "var(--surface-soft)",
        beige: "var(--beige)",
        "beige-light": "var(--beige-light)",
        lavender: "var(--lavender)",
        "lavender-medium": "var(--lavender-medium)",
        "lavender-soft": "var(--lavender-soft)",
        "lavender-pale": "var(--lavender-pale)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
        dark: "var(--dark)",
        "dark-soft": "var(--dark-soft)",
        "dark-ui": "var(--dark-ui)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      borderRadius: {
        card: "28px",
        "card-sm": "24px",
        control: "16px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 20px 60px -24px rgba(137, 116, 149, 0.18)",
        card: "0 8px 40px -12px rgba(41, 40, 41, 0.08)",
      },
      spacing: {
        section: "140px",
        "section-md": "96px",
        "section-sm": "72px",
      },
      transitionDuration: {
        premium: "350ms",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
