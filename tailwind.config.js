/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0a0f1a",
          50: "#f0f4ff",
          100: "#e0e8f5",
          200: "#c2d1eb",
          800: "#111827",
          900: "#0a0f1a",
          950: "#060a12",
        },
        accent: {
          DEFAULT: "#34d399",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
