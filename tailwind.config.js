/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--bg-primary)",
          surface: "var(--bg-surface)",
          secondary: "var(--bg-secondary-surface)",
        },
        text: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent-primary)",
        },
        status: {
          warning: "var(--status-warning)",
          danger: "var(--status-danger)",
          success: "var(--status-success)",
        },
        border: "var(--border-color)",
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'IBM Plex Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'Source Serif 4', 'IBM Plex Serif', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
