module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'blue': '#00a3d8',
      'blackLight': '#1d1d1b',


      'grey': '#716e67',
      'header-divider-color': '#f7edd9',
      'bg-color': '#f7edd9',
      'text-color': '#373a36',
      'content-text-color': '#373a36',
      'menu-items-text-color': '#373a36',
      'header-bg-color': '#373a36',
      'header-cta-bg-color': '#f7edd9',
      'header-text-color': '#f7edd9',
      'header-cta-text-color': '#373a36',
      'footer-bg-color': '#373a36',
      'footer-text-color': '#f7edd9',
      'nav-button-text-color': '#f7edd9',
      'nav-button-bg-color': '#373a36',
      'title-text-color': '#215732',
      'coloured-text-color': '#215732',
      'button-border-color': '#215732',
      'primary-btn-bg-color': '#215732',
      'primary-btn-bg-hover-color': '#f7edd9',
      'primary-btn-text-color': '#f7edd9',
      'primary-btn-text-hover-color': '#215732',
      'boxed-primary-btn-text-color': '#215732',
      'boxed-primary-btn-bg-color': '#f7edd9',
      'full-bleed-bg-color': '#89a84f',
      'dividing-line-color': '#215732',
      'dietary-requirements-bg-color': '#89a84f',
      'additional-toppings-border-color': '#215732',
      'link-text-color': '#89a84f'
    },
    fontFamily: {
      'main-text-font': ['"Campton", Georgia, Arial, sans-serif'],
      'title-text-font': ['"Larken", Georgia, Arial, sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ 
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}