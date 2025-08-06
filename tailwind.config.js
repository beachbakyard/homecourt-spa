/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand-yellow': '#fcd34d',
        'sunset-orange': '#fb923c',
        'teal-ocean': '#2dd4bf',
        'night-sky': '#1e293b',
        'cream': '#fef9c3',
        'beach-white': '#ffffff',
      },
      fontFamily: {
        'headline': ['Fredoka', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}