import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'button-gradient': 'linear-gradient(to right, #33D35E, #2AB6D9)',
      },
      colors: {
        primary: {
          darkBlue: "hsl(233, 26%, 24%)",
          limeGreen: "hsl(136, 65%, 51%)",
          brightCyan: "hsl(192, 70%, 51%)",
        },
        neutral: {
          grayishBlue: "hsl(233, 8%, 62%)",
          lightGrayishBlue: "hsl(220, 16%, 96%)",
          veryLightGray: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
      fontSize: {
        base: "18px", 
        input: "24px", 
      },
      screens: {
        sm: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
