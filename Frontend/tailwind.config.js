/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        botAnimate: "botAnimate 2s ease-in-out infinite alternate",
        bgAnimate: "bgAnimate 8s ease-in-out infinite alternate",
      },
      keyframes: {
        botAnimate: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "100%": { transform: "scale(1.1) rotate(-5deg)" },
        },
        bgAnimate: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "bg-image":
          "url('https://github.com/safak/chatgpt-clone/blob/completed/client/public/bg.png?raw=true')",
      },
      screens: {
        "max-sm": { max: "640px" }, 
        "max-md": { max: "768px" }, 
        "max-lg": { max: "1024px" }, 
        "max-xl": { max: "1280px" },
      },
    },
  },
  plugins: [],
};
