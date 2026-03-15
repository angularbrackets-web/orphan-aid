/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {

      // --------------------------------------------------------
      // FONTS
      // --------------------------------------------------------
      fontFamily: {
        heading: ['Cormorant Variable', 'Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        body:    ['DM Sans Variable', 'DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },

      // --------------------------------------------------------
      // TYPE SCALE — Perfect Fourth (1.333) from 18px
      // --------------------------------------------------------
      fontSize: {
        'xs':   ['0.75rem',    { lineHeight: '1.8' }],   // 12px — captions
        'sm':   ['0.875rem',   { lineHeight: '1.6' }],   // 14px — UI labels
        'base': ['1.125rem',   { lineHeight: '1.65' }],  // 18px — body
        'lg':   ['1.5rem',     { lineHeight: '1.4' }],   // 24px — large body
        'xl':   ['2rem',       { lineHeight: '1.3' }],   // 32px — H3
        '2xl':  ['2.6875rem',  { lineHeight: '1.15' }],  // 43px — H2
        '3xl':  ['3.5625rem',  { lineHeight: '1.1' }],   // 57px — H1
        '4xl':  ['4.75rem',    { lineHeight: '1.05' }],  // 76px — Display
        '5xl':  ['6.25rem',    { lineHeight: '1.0' }],   // 100px — Hero
        '6xl':  ['8rem',       { lineHeight: '1.0' }],   // 128px — Oversized
      },

      // --------------------------------------------------------
      // FONT WEIGHTS
      // --------------------------------------------------------
      fontWeight: {
        light:    '100',
        regular:  '400',
        medium:   '500',
        semibold: '600',
      },

      // --------------------------------------------------------
      // LETTER SPACING
      // --------------------------------------------------------
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.03em',
        tight:    '-0.02em',
        snug:     '-0.01em',
        normal:    '0em',
        wide:     '+0.04em',
        wider:    '+0.06em',
        widest:   '+0.08em',
      },

      // --------------------------------------------------------
      // COLORS — Islamic Manuscript Palette
      // --------------------------------------------------------
      colors: {
        // Backgrounds
        bg: {
          DEFAULT: '#F8F3EB',  // Warm parchment
          subtle:  '#F0E9DA',  // Deeper parchment
          surface: '#E8DEC9',  // Elevated surface
        },
        // Borders
        border: {
          DEFAULT: '#D4C9B0',  // Warm stone
          subtle:  '#E4DCCA',  // Pale stone
        },
        // Text
        ink: {
          DEFAULT:   '#1C1208',  // Warm near-black
          secondary: '#6B5B45',  // Warm brown
          muted:     '#9A8872',  // Light brown
        },
        // Brand colors
        gold: {
          DEFAULT: '#C4952A',  // Islamic gold
          light:   '#D4A84B',  // Pale gold (SVG lines)
          muted:   '#E8D5A3',  // Watermark opacity
        },
        teal: {
          DEFAULT: '#1B3A4B',  // Deep teal — primary CTA
          hover:   '#142D3A',  // Button hover
          text:    '#FDFAF5',  // Text on teal
        },
        // Semantic
        success: '#1A5C3A',
        error:   '#B91C1C',
      },

      // --------------------------------------------------------
      // SPACING — 4px Base Grid
      // --------------------------------------------------------
      spacing: {
        '1':  '0.25rem',   // 4px
        '2':  '0.5rem',    // 8px
        '3':  '0.75rem',   // 12px
        '4':  '1rem',      // 16px
        '5':  '1.25rem',   // 20px
        '6':  '1.5rem',    // 24px
        '8':  '2rem',      // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
        '40': '10rem',     // 160px
        '48': '12rem',     // 192px
      },

      // --------------------------------------------------------
      // MAX WIDTHS
      // --------------------------------------------------------
      maxWidth: {
        content: '80rem',   // 1280px — layout max
        prose:   '45rem',   // 720px — body copy
        narrow:  '35rem',   // 560px — pull quotes
      },

      // --------------------------------------------------------
      // BORDER RADIUS — Sharp, covenant-appropriate
      // --------------------------------------------------------
      borderRadius: {
        none:  '0px',
        sharp: '2px',   // Default for all components
        sm:    '4px',   // Internal only
      },

      // --------------------------------------------------------
      // EASING
      // --------------------------------------------------------
      transitionTimingFunction: {
        'out-expo':     'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart':    'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
        'linear':       'linear',
      },

      // --------------------------------------------------------
      // DURATIONS
      // --------------------------------------------------------
      transitionDuration: {
        'instant':    '100ms',
        'fast':       '200ms',
        'normal':     '350ms',
        'slow':       '500ms',
        'deliberate': '700ms',
        'draw':       '1200ms',
        'count':      '2000ms',
        'page':       '400ms',
      },

      // --------------------------------------------------------
      // ANIMATION KEYFRAMES
      // --------------------------------------------------------
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'draw-line': {
          '0%':   { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' },
        },
      },

      animation: {
        'fade-up':   'fade-up 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':   'fade-in 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'draw-line': 'draw-line 1200ms linear forwards',
      },

      // --------------------------------------------------------
      // SCREENS (no changes — Tailwind defaults are solid)
      // --------------------------------------------------------
      // sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

    },
  },
  plugins: [],
}
