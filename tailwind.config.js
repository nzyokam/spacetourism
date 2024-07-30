/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['38px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['70px', '90px'],
      '8xl': ['106px', '126px']
    },
    extend: {
     screens: {
        xs: '344px',
        sm: '430px', 
        md: '768px',
        lg: '1280px',
        xl: '1366px',
        '2xl': '1536px',
      }, 
      backgroundImage: {
        'home-bg': "url('/background-home-desktop.jpg')",
        'home-bg-md': "url('/background-home-tablet.jpg')",
        'home-bg-sm': "url('/background-home-mobile.jpg')",
        'home-bg-xs': "url('/background-home-mobile.jpg')",
        'destination-bg':"url('/background-destination-desktop.jpg')",
        'destination-bg-md':"url('/background-destination-tablet.jpg')",
        'destination-bg-sm':"url('/background-destination-mobile.jpg')",
        'destination-bg-xs':"url('/background-destination-mobile.jpg')",
        'crew-bg':"url('/background-crew-desktop.jpg')",
        'crew-bg-sm':"url('/background-crew-mobile.jpg')",
        'crew-bg-xs':"url('/background-crew-mobile.jpg')",
        'crew-bg-md':"url('/background-crew-tablet.jpg')",
        'technology-bg':"url('/background-technology-desktop.jpg')",
        'technology-bg-sm':"url('/background-technology-mobile.jpg')",
        'technology-bg-xs':"url('/background-technology-mobile.jpg')",
        'technology-bg-md':"url('/background-technology-tablet.jpg')",
      },
      colors: {
        primary: "#ECEEFF",
        "yellow": "#a09321",
        "coral-red": "#FF6452",
        "slate-gray": "rgb(78, 76, 86)",
        "pale-blue": "rgb(207, 214, 248)",
        "white-400": "rgba(255, 255, 255, 0.80)" 
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.glassbg': {
          'background': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          // 'border-radius': '20px',
          // 'border': '1px solid rgba(255, 255, 255, 0.18)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.57)',
        },
      });
    }),
  ],
};