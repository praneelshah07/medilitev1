import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "clarity-blue": "#1f4f9c",
        "clarity-teal": "#1e6f5c",
      },
    },
  },
  plugins: [],
};

export default config;
