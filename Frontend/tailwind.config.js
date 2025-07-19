/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
      },
	  gridTemplateColumns: {
		'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
	  },
      // 3D Effect Extensions
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      height: {
        '300vh': '300vh',
      },
      // Custom blur levels
      blur: {
        xs: '2px',
      },
      // Animation extensions
      animation: {
        'parallax': 'parallax 1s ease-out forwards',
      },
      keyframes: {
        parallax: {
          '0%': { opacity: 0, transform: 'translateY(20px) translateZ(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0) translateZ(0)' },
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};