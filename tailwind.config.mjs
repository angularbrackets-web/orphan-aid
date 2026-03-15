/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cormorant Variable', 'Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        body:    ['DM Sans Variable', 'DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['0.75rem',    { lineHeight: '1.8' }],
        'sm':   ['0.875rem',   { lineHeight: '1.6' }],
        'base': ['1.125rem',   { lineHeight: '1.65' }],
        'lg':   ['1.5rem',     { lineHeight: '1.4' }],
        'xl':   ['2rem',       { lineHeight: '1.3' }],
        '2xl':  ['2.6875rem',  { lineHeight: '1.15' }],
        '3xl':  ['3.5625rem',  { lineHeight: '1.1' }],
        '4xl':  ['4.75rem',    { lineHeight: '1.05' }],
        '5xl':  ['6.25rem',    { lineHeight: '1.0' }],
        '6xl':  ['8rem',       { lineHeight: '1.0' }],
      },
      colors: {
        bg: {
          DEFAULT: '#F8F3EB',
          subtle:  '#F0E9DA',
          surface: '#E8DEC9',
        },
        border: {
          DEFAULT: '#D4C9B0',
          subtle:  '#E4DCCA',
        },
        ink: {
          DEFAULT:   '#1C1208',
          secondary: '#6B5B45',
          muted:     '#7A6650',
        },
        gold: {
          DEFAULT: '#C4952A',
          light:   '#D4A84B',
          muted:   '#E8D5A3',
        },
        teal: {
          DEFAULT: '#1B3A4B',
          hover:   '#142D3A',
          text:    '#FDFAF5',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '44': '11rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '68': '17rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      maxWidth: {
        content: '80rem',
        prose:   '45rem',
        narrow:  '35rem',
      },
      borderRadius: {
        none:  '0px',
        sharp: '2px',
        sm:    '4px',
      },
      transitionTimingFunction: {
        'out-expo':     'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart':    'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter':  '-0.03em',
        'tight':    '-0.02em',
        'snug':     '-0.01em',
        'wide':     '0.04em',
        'wider':    '0.06em',
        'widest':   '0.08em',
      },
    },
  },
  plugins: [],
}
