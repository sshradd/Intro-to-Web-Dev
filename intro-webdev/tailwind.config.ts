import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gunMetal: '#1C232B',
        'aurometal-saurus': '#6C7289',
        'deep-aquamarine': '#3D8168',
        cream: '#F2EAE2',
        white: '#FFFFFF',
      },
      screens: {
        mobile: { max: '375px' },
      },
      fontFamily: {
        montSerrat: ['var(--font-montSerrat)'],
        fraunces: ['var(--font-fraunces)'],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const typographyComponents = {
        '.text-overline': {
          fontFamily: 'var(--font-montSerrat)',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '500',
          fontFeatureSettings: `'clig' off, 'liga' off`,
          lineHeight: 'normal',
          letterSpacing: '5px',
        },
        '.text-display': {
          fontFamily: 'var(--font-fraunces)',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: '700',
          fontFeatureSettings: `'clig' off, 'liga' off`,
          lineHeight: '32px',
        },
        '.text-body': {
          fontFamily: 'var(--font-montSerrat)',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '500',
          fontFeatureSettings: `'clig' off, 'liga' off`,
          lineHeight: '23px',
        },
        '.text-button': {
          fontFamily: 'var(--font-montSerrat)',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '700',
          fontFeatureSettings: `'clig' off, 'liga' off`,
          lineHeight: 'normal',
        },
      };

      const buttonComponents = {
        '.button': {
          width: '100%',
          height: '48px',
          borderRadius: '8px',
          backgroundColor: '#3D8168',
          '&:hover': {
            backgroundColor: '#1A4032',
          },
        },
      };

      addComponents({ ...typographyComponents, ...buttonComponents });
    }),
  ],
};
export default config;