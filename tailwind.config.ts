import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#C4785A',
          light: '#D89A7F',
          dark: '#A45C42',
        },
        secondary: {
          DEFAULT: '#FDF6F0',
          dark: '#F5E8DC',
        },
        accent: {
          DEFAULT: '#2A6B6B',
          light: '#3A8585',
          dark: '#1A5151',
        },
        success: '#7DB59A',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(196, 120, 90, 0.08)',
        medium: '0 8px 30px rgba(196, 120, 90, 0.12)',
        strong: '0 12px 40px rgba(196, 120, 90, 0.16)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};

export default config;
