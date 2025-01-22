import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palettes if needed
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            a: {
              color: "var(--foreground)",
              "&:hover": {
                color: "var(--foreground)",
                textDecoration: "underline",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
