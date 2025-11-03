import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-text': '#1C1C1C',
        'dark-grey': '#323232',
        shadow: '#F0F0F0',
        white: '#FFFFFF',
        pastel: {
          yellow: {
            light: '#CFC27B',
            dark: '#B3A76A',
          },
          blue: {
            light: '#BFCEEC',
            dark: '#96A6C5',
          },
          pink: {
            light: '#EAC1DD',
            dark: '#D5A4C4',
          },
          green: {
            light: '#82AB9B',
            dark: '#6D8F81',
          },
          purple: {
            light: '#ACACE6',
            dark: '#8585B3',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
