module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "bg-primary",
      "hover:bg-primaryDark",
      "bg-telegram",
      "hover:bg-telegramDark",
      "bg-discord",
      "hover:bg-discordDark",
      "bg-linkedin",
      "hover:bg-linkedinDark",
      "bg-youtube",
      "hover:bg-youtubeDark",
      "bg-gdscButton",
      "hover:bg-gdscButtonDark",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        primary: "hsl(151,70%,35%)",
        primaryDark: "hsl(151,70%,25%)",
        telegram: "hsl(200,100%,40%)",
        telegramDark: "hsl(200,100%,30%)",
        discord: "hsl(227,58%,65%)",
        discordDark: "hsl(227,58%,55%)",
        linkedin: "hsl(201,100%,35%)",
        linkedinDark: "hsl(201,100%,25%)",
        youtube: "hsl(0,100%,50%)",
        youtubeDark: "hsl(0,100%,40%)",
        gdscButton: "hsl(214, 82%, 51%)",
        gdscButtonDark: "hsl(214, 82%, 41%)",
        icon:"#CAFECA",
        tint:"#a08516"
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(255, 255, 255, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)",
      md: "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)",
      lg: "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
      xl: "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)",
      "2xl": "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
      "3xl": "0 35px 60px -15px rgba(255, 255, 255, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)",
      none: "none",
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [],
};
