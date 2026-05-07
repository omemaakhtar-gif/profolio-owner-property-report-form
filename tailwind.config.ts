import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bayut: "#00A862",
        ink: "#111827",
        muted: "#6B7280",
        mist: "#F8FAFC",
        line: "#E5E7EB"
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        sheet: "0 22px 55px rgba(17, 24, 39, 0.13)",
        card: "0 10px 30px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
