/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A", // preto principal — texto e fundos escuros
        charcoal: "#161513", // fundo escuro alternativo (rodapé, overlays)
        paper: "#FAFAF8", // branco quente — fundo principal
        mist: "#EFEDE8", // seções alternadas
        line: "#DDDAD2", // bordas e divisórias finas
        graphite: "#55534E", // texto secundário
        smoke: "#8B887F", // texto terciário / legendas
      },
      fontFamily: {
        display: ['"Cormorant"', "serif"],
        sans: ['"Jost"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1400px",
      },
      transitionDuration: {
        1200: "1200ms",
        1500: "1500ms",
        7000: "7000ms",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleFadeIn: {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        scaleFadeIn: "scaleFadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
