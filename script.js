tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        dark: {
          base: "#0B0F19",
          card: "#111827",
          border: "#1F2937",
        },
        accent: {
          purple: "#8B5CF6",
          cyan: "#06B6D4",
          amber: "#F59E0B",
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 3s infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%": { opacity: "0.4", transform: "scale(1)" },
          "100%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
};
