import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,css}',
    './components/**/*.{js,ts,jsx,tsx,css}',
    './src/**/*.{js,ts,jsx,tsx,css}', // include src CSS files too
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: '#212121',
        textSecondary: '#616161',
        textDisabled: '#9e9e9e',
        primary: '#82AB9B',
        secondary: '#5C3167',
        secondaryLight: '#7A4B86',
        darkText: '#1C1C1C',
        darkGrey: '#323232',
        shadow: '#F0F0F0',
        white: '#FFFFFF',
        pastel: {
          yellow: { light: '#CFC27B', dark: '#B3A76A' },
          blue: { light: '#BFCEEC', dark: '#96A6C5' },
          pink: { light: '#EAC1DD', dark: '#D5A4C4' },
          green: { light: '#82AB9B', dark: '#618074' },
          purple: { light: '#ACACE6', dark: '#8585B3' },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['Geist Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'title-xl': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'title-lg': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '600' }],
        'title-md': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        subtitle: ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        body: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        caption: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
