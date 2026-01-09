export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base dark tones (Japanese lacquerware inspired)
        'jp-black': '#0D0D0D',
        'jp-charcoal': '#1A1A1A',
        'jp-slate': '#2D2D2D',

        // Warm Japanese accents
        'jp-red': {
          DEFAULT: '#C53D43',
          light: '#E05A5A',
          dark: '#8B2E33',
          muted: 'rgba(197, 61, 67, 0.15)',
        },
        'jp-gold': {
          DEFAULT: '#C9A962',
          light: '#E5C97A',
          dark: '#A08040',
          muted: 'rgba(201, 169, 98, 0.15)',
        },
        'jp-sakura': {
          DEFAULT: '#F6C1C7',
          light: '#FFE5E8',
          dark: '#E89BA2',
          muted: 'rgba(246, 193, 199, 0.12)',
        },

        // Neutral tones (washi paper inspired)
        'jp-paper': '#F5F2EB',
        'jp-stone': '#9CA3AF',
        'jp-ash': '#6B7280',

        // Zen color palette (Japanese garden inspired)
        zen: {
          paper: '#F5F2EB',      // Washi paper base
          cream: '#FFF8F0',      // Softer white
          sand: '#E8DCC9',       // Rock garden sand
          sage: '#A8B99C',       // Garden green
          bamboo: '#8B9F7C',     // Deeper green
          stone: '#9CA3AF',      // Natural grey
          charcoal: '#3A3A3A',   // Soft black
          ink: '#2D2D2D',        // Text color
          mist: 'rgba(168,185,156,0.15)', // Subtle overlay
        },
      },
      fontFamily: {
        'jp-serif': ['Noto Serif JP', 'serif'],
        'jp-sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'sakura-fall': 'sakura-fall 15s linear infinite',
        'sakura-sway': 'sakura-sway 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'zen-fade': 'zen-fade 1200ms ease-out forwards',
        'zen-float': 'zen-float 40s ease-in-out infinite',
        'zen-scale': 'zen-scale 1000ms ease-out forwards',
        'ripple': 'ripple 1000ms ease-out forwards',
        'moon-gate': 'moon-gate 1500ms ease-out forwards',
      },
      keyframes: {
        'sakura-fall': {
          '0%': { transform: 'translateY(-10px) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) translateX(50px) rotate(360deg)', opacity: '0' },
        },
        'sakura-sway': {
          '0%, 100%': { transform: 'rotateZ(-15deg) scale(1)' },
          '50%': { transform: 'rotateZ(15deg) scale(1.1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zen-fade': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zen-float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(0) translateX(20px)' },
          '75%': { transform: 'translateY(20px) translateX(10px)' },
        },
        'zen-scale': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: '0.8' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'moon-gate': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
