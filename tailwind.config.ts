import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Corporate Palette
        primary: {
          navy: '#001F3F',
          teal: '#0A5F5F',
          gold: '#C9A961',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        semantic: {
          success: '#059669',
          warning: '#D97706',
          error: '#DC2626',
          info: '#0284C7',
        },
        // Legacy colors (keeping for compatibility)
        charcoal: '#0F1113',
        offwhite: '#F7F6F3',
        teal: {
          DEFAULT: '#0A5F5F',
          light: '#3D7A81',
          dark: '#1E3D40',
        },
        bronze: '#A89F91',
        mist: '#E8E6E1',
        navy: {
          DEFAULT: '#001F3F',
          dark: '#002244',
          light: '#003366',
        },
        steel: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          dark: '#4B5563',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Premium Typography Scale (Fluid)
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
        'base': ['1rem', { lineHeight: '1.625', letterSpacing: '0', fontWeight: '400' }],
        'lg': ['1.125rem', { lineHeight: '1.625', letterSpacing: '0', fontWeight: '400' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '500' }],
        '2xl': ['1.5rem', { lineHeight: '1.375', letterSpacing: '-0.01em', fontWeight: '600' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '800' }],
        // Legacy sizes
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.8', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['15px', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'label': ['13px', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }],
      },
      spacing: {
        // McKinsey spacing scale
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '40px',
        'xl': '64px',
        '2xl': '96px',
        '3xl': '128px',
        '4xl': '160px',
      },
      maxWidth: {
        'container': '1280px',
        'content': '720px',
        'wide': '900px',
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(24px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(24px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-24px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'premium': '0 30px 60px -15px rgba(0, 31, 63, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 24px rgba(0, 31, 63, 0.08)',
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [],
};

export default config;
