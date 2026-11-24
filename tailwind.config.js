/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05070D',
        surface: '#101827',
        cyanAccent: '#00E5FF',
        violetAccent: '#8B5CF6',
        ink: '#F8FAFC',
        muted: '#94A3B8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        cyanGlow: '0 0 35px -8px rgba(0, 229, 255, 0.35)',
        violetGlow: '0 0 35px -8px rgba(139, 92, 246, 0.35)',
      },
    },
  },
  plugins: [],
};
