/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
      mytheme: {
        primary: "#22577A",
        secondary: "#F25757",
        accent: "#7CFFC4",
        neutral: "#292524",
        "base-100": "#f3f4f6",
        info:  "#4EA0DA",
        success: "#7DE3B7",
        warning: "#E7AF13",
        error: "#F3355E",
      },
    }
    ],
    
  },
};
