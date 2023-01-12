# Project Vite React-ts Tailwind

npm create vite@latest todoappts -- --template react-ts
cd todoappts

## Install tailwindcss framework
npm install -D tailwindcss postcss autoprefixer

## Create setting tailwindcss
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

## Add the Tailwind directives to your CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

## Install extension
Tailwind CSS IntelliSense

## Install react icons
npm install react-icons --save

## Instlla Plugin @tailwindcss/forms
npm install @tailwindcss/forms