/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#08040c",
          "200": "rgba(255, 255, 255, 0.2)",
        },
        darkorchid: "#733ec7",
        midnightblue: "#2e1752",
        dimgray: "rgba(107, 107, 107, 0.1)",
        "neutral-100": "#fff",
        thistle: "#ddc7ff",
        mediumpurple: "#ba8eff",
        mediumorchid: "#ca62db",
        hotpink: "#fd53b7",
        black: "#000",
      },
      fontFamily: {
        "sf-pro-display": "'SF Pro Display'",
        "font-awesome-6-brands": "'Font Awesome 6 Brands'",
        "font-awesome-6-pro": "'Font Awesome 6 Pro'",
      },
      borderRadius: {
        "14xl-3": "33.3px",
        "21xl": "40px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "3xl": "22px",
      xl: "20px",
      "5xl": "24px",
      sm: "14px",
      lg: "18px",
      "35xl": "54px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
