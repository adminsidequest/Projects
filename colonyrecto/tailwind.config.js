/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        ocean: '#15294A',
        navy: '#1F3A66',
        brand: '#2C6AAA',
        teal: '#0D8068',
        wa: '#0A8757',
        ink: '#16202B',
        slate: '#5A6A7B',
        mist: '#EAF3FB',
        cloud: '#F7FAFD',
        line: '#DCE6F0',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        500: '500',
        600: '600',
        700: '700',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(31, 58, 102, 0.18)',
        card: '0 8px 24px -14px rgba(31, 58, 102, 0.22)',
      },
    },
  },
  plugins: [],
};
