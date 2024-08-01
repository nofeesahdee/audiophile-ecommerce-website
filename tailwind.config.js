/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../starter-code/assets/home/desktop/image-hero.jpg')",
        'tablet': "url('../starter-code/assets/home/tablet/image-header.jpg')",
        'mobile': "url('../starter-code/assets/home/mobile/image-header.jpg')",
        'speaker-desktop': "url('../starter-code/assets/home/desktop/image-speaker-zx7.jpg')",
        'speaker-tablet': "url('../starter-code/assets/home/tablet/image-speaker-zx7.jpg')",
        'speaker-mobile': "url('../starter-code/assets/home/mobile/image-speaker-zx7.jpg')",
        'earphone-desktop': "url('../starter-code/assets/home/desktop/image-earphones-yx1.jpg')",
        'earphone-tablet': "url('../starter-code/assets/home/tablet/image-earphones-yx1.jpg')",
        'earphone-mobile': "url('../starter-code/assets/home/mobile/image-earphones-yx1.jpg')",
        'patter-circle': "url('../starter-code/assets/home/desktop/pattern-circles.jpg')",
        'best-gear-desktop': "url('../starter-code/assets/shared/desktop/image-best-gear.jpg')",
        'best-gear-tablet': "url('../starter-code/assets/shared/tablet/image-best-gear.jpg')",
        'best-gear-mobile': "url('../starter-code/assets/shared/mobile/image-best-gear.jpg')",
      },
      screens: {
        'sm': '300px',
        // => @media (min-width: 300px) { ... }

        'md': '640px',
        // => @media (min-width: 640px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}