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
        // Original colors (keeping for compatibility)
        charcoal: '#0F1113',
        offwhite: '#F7F6F3',
        teal: {
          DEFAULT: '#2F5D62',
          light: '#3D7A81',
          dark: '#1E3D40',
        },
        bronze: '#A89F91',
        mist: '#E8E6E1',
        // McKinsey design system colors
        navy: {
          DEFAULT: '#003366',
          dark: '#002244',
          light: '#004488',
        },
        steel: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          dark: '#4B5563',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // McKinsey typography scale
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
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(47, 93, 98, 0.1), 0 10px 10px -5px rgba(47, 93, 98, 0.04)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
